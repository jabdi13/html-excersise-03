import React, { Fragment } from 'react';
import '../css/App.css';
import Header from './Header';
import Hero from './Hero';
import CardList from './CardList';
import Footer from './Footer';
import { cards } from '../manifests/CardList.json';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <CardList cards={cards} />
      <Footer />
    </Fragment>
  );
};

export default App;