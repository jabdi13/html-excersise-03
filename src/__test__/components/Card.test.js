import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Card from '../../components/Card';
import cardsMock from '../../__mocks__/cardsMock';

describe('<Card />', () => {
  const card = shallow(<Card {...cardsMock[0]} />);
  test('Render del componente Card', () => {
    expect(card.length).toEqual(1);
  });

  test('It received the props', () => {
    expect(card.find('h4').text()).toBe(cardsMock[0].title);
  });
});

describe('Card Snapshot', () => {
  test('Comprobar la UI del componente Card', () => {
    const card = create(<Card {...cardsMock[0]} />);
    expect(card.toJSON()).toMatchSnapshot();
  });
});