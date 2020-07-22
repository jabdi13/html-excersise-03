import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import App from '../../components/App';
import Hero from '../../components/Hero';
import CardList from '../../components/CardList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import cardsMock from '../../__mocks__/cardsMock';

describe('<App />', () => {
  const app = shallow(<App />);
  test('Render del componente App', () => {
    expect(app.length).toEqual(1);
  });

  test('Render los componentes de la app', () => {
    expect(app.contains([
      <Header />,
      <Hero />,
      <CardList cards={cardsMock} />,
      <Footer />,
    ])).toBeTruthy();
  });
});

describe('App Snapshot', () => {
  test('Comprobar la UI del componente App', () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});