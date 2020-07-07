import React from 'react';
import '../css/components/CardList.css';
import Card from './Card';

const CardList = ({cards}) => {
  return (
    <div className="CardList">
      {cards.map((card, index) => (
        <Card image={card.image} title={card.title} body={card.body} key={index} />
      ))}
    </div>
  );
};

export default CardList;