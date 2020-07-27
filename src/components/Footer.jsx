import React, { useState, useEffect } from 'react';
import '../css/components/Footer.css';
import BlockContent from './BlockContent';

const Footer = () => {

  const [count, setCount] = useState(0);
  const eventComposed = new Event('composed');
  const eventButtons = new Event('changeColorButtons');

  const handleClick = (e, eventComposed, eventButtons) => {
    const { target } = e;
    e.target.dispatchEvent(eventComposed);
    e.target.dispatchEvent(eventButtons);

    setCount(count + 1);

    console.log(`Id: ${target.id}, Count: ${count}`);
  };

  let $anchors;

  useEffect(() => {

    $anchors = document.querySelectorAll('button.Button');

    $anchors.forEach((node) => {
      node.addEventListener('composed', e => {
        e.stopPropagation();
        console.log('I\'m not propagating')
      });
      node.addEventListener('changeColorButtons', e => {
        const rgb1 = Math.random() * 256;
        const rgb2 = Math.random() * 256;
        const rgb3 = Math.random() * 256;
        let $lis = document.querySelectorAll('li.Button-Menu');
        $lis.forEach($li => {
          $li.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
        })
      });
    });
  }, []);
  return (
    <footer className="Footer">
      <BlockContent>
        <h3>¡Bienvenido!</h3>
        <p className="Content">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <span>Aenean commodo</span> liguia eget dolor. Aenean
          massa. Cum socils
          natoque penatibus et magnis dis parturiet montes, nascetur ridiculus mus.
        </p>
          <p className="Content">
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
            justo,
          rhoncus ut, imperdiet a, venenatis vitae, justo. <span>Nullam dictum</span> felis eu pede mollis pretum. Integer
          tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        </p>
        <button id="1" onClick={e => handleClick(e, eventComposed, eventButtons)} href="" className="Button">Leer más</button>
      </BlockContent>
      <BlockContent>
        <h3>Noticias Recientes</h3>
        <p className="Content-Date">Publicada: 09.09.2012</p>
        <p className="Content">
          Nam liber tempor cum soluta nobis eleifend option congue nihimperdiet doming quod mazim placerat facer possim
          assum orem
          ipsum dolor sit amet consectetuer.
      </p>
        <p className="Content-Date">Publicada: 08.09.2012</p>
        <p className="Content">
          Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
          enim ad
          minim veniam, quis nostrud exerci tation.
      </p>
        <button id="2" onClick={e => handleClick(e, eventComposed, eventButtons)} href="" className="Button">Más noticias</button>
      </BlockContent>
      <BlockContent>
        <h3>Nuestros Servicios</h3>
        <ul>
          <li>{">"} Consultoría Gerencial</li>
          <li>{">"} Análisis Regulatorio de Politicas</li>
          <li>{">"} Investigación de Mercado</li>
          <li>{">"} Gestión de Proyectos</li>
          <li>{">"} Regulación de Soporte</li>
          <li>{">"} Análisis de Riesgos</li>
          <li>{">"} Formación Gerencial</li>
        </ul>
        <button id="3" onClick={e => handleClick(e, eventComposed, eventButtons)} href="" className="Button">Leer más</button>
      </BlockContent>
    </footer>
  );
};

export default Footer;