import React, { useState, useEffect } from 'react';
import '../css/components/ButtonMenu.css'
import '../css/components/Menu.css'

const Menu = () => {
  const [count, setCount] = useState(0);
  const eventComposed = new Event('composed');
  const eventButtons = new Event('changeColorButtons');

  const handleClick = (e, eventComposed, eventButtons) => {
    const elementWithActive = document.querySelector('.Active');
    elementWithActive.classList.remove('Active')
    const { target } = e;
    e.target.dispatchEvent(eventComposed);
    e.target.dispatchEvent(eventButtons);
    target.classList.add('Active');

    setCount(count + 1);

    console.log(`Id: ${target.id}, Count: ${count}`);
  };

  let $lis;

  useEffect(() => {

    $lis = document.querySelectorAll('li.Button-Menu');

    $lis.forEach((node) => {
      node.addEventListener('composed', e => {
        e.stopPropagation();
        console.log('I\'m not propagating')
      });
      node.addEventListener('changeColorButtons', e => {
        const rgb1 = Math.random() * 256;
        const rgb2 = Math.random() * 256;
        const rgb3 = Math.random() * 256;
        let $anchors = document.querySelectorAll('button.Button');
        $anchors.forEach($anchor => {
          $anchor.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
        })
      });
    });
  }, []);

  return (
    <ul className="Menu">
      <li onClick={e => handleClick(e, eventComposed, eventButtons)} id="home" className="Active Button-Menu">Inicio</li>
      <li onClick={e => handleClick(e, eventComposed, eventButtons)} id="about" className="Button-Menu">Acerca</li>
      <li onClick={e => handleClick(e, eventComposed, eventButtons)} id="services" className="Button-Menu">Servicios</li>
      <li onClick={e => handleClick(e, eventComposed, eventButtons)} id="products" className="Button-Menu">Productos</li>
      <li onClick={e => handleClick(e, eventComposed, eventButtons)} id="contact" className="Button-Menu">Contacto</li>
    </ul>
  );
};

export default Menu;