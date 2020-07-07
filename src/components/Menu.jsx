import React from 'react';
import '../css/components/ButtonMenu.css'
import '../css/components/Menu.css'

const Menu = () => {
  return (
    <ul className="Menu">
      <li className="Button-Menu-Active">Inicio</li>
      <li className="Button-Menu">Acerca</li>
      <li className="Button-Menu">Servicios</li>
      <li className="Button-Menu">Productos</li>
      <li className="Button-Menu">Contacto</li>
    </ul>
  );
};

export default Menu;