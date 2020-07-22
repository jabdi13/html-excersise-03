import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import CardList from '../../components/CardList';
import cardsMock from '../../__mocks__/cardsMock';

describe('<CardList />', () => {
  const cardList = shallow(<CardList cards={cardsMock} />);
  test('Render del componente CardList', () => {
    expect(cardList.length).toEqual(1);
  });

  test('Render del <Card /> n times', () => {
    expect(cardList.children()).toHaveLength(cardsMock.length);
  });
});

describe('CardList Snapshot', () => {
  test('Comprobar la UI del componente CardList', () => {
    const cardList = create(<CardList cards={cardsMock} />);
    expect(cardList.toJSON()).toMatchSnapshot();
  });
});