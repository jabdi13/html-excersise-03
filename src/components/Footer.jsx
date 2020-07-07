import React from 'react';
import '../css/components/Footer.css';
import BlockContent from './BlockContent';

const Footer = () => {
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
        <a href="" className="Button">Leer más</a>
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
        <a href="" className="Button">Más noticias</a>
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
        <a href="" className="Button">Leer más</a>
      </BlockContent>
    </footer>
  );
};

export default Footer;