import React from 'react';
import '../css/components/Card.css';

const Card = ({image, title, body}) => {
  return (
    <figure className="Card">
      <img src={image} alt="" />
      <figcaption>
      <h4>{title}</h4>
      <p>{body}</p>
      </figcaption>
    </figure>
  );
};

export default Card;