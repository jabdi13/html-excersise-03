import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Menu from '../../components/Menu';

describe('<Menu />', () => {
  const menu = shallow(<Menu />);
  test('Render del componente Menu', () => {
    expect(menu.length).toEqual(1);
  });

  test('Render 5 listed elements in the menu', () => {
    expect(menu.find('ul').children()).toHaveLength(5);
  });
});

describe('Menu Snapshot', () => {
  test('Comprobar la UI del componente Menu', () => {
    const menu = create(<Menu />);
    expect(menu.toJSON()).toMatchSnapshot();
  });
});