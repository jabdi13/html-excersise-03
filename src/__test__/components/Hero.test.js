import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Hero from '../../components/Hero';

describe('<Hero />', () => {
  const hero = shallow(<Hero />);
  test('Render del componente Hero', () => {
    expect(hero.length).toEqual(1);
  });

  test('Render del wrapper de la hero', () => {
    expect(hero.find('h1').text()).toBe('Soluciones corporativas');
  });
});

describe('Hero Snapshot', () => {
  test('Comprobar la UI del componente Hero', () => {
    const hero = create(<Hero />);
    expect(hero.toJSON()).toMatchSnapshot();
  });
});