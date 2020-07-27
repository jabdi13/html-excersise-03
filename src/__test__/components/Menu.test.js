import React from 'react';
import { shallow, mount } from 'enzyme';
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

describe('Menu Behavior', () => {
  window.console.log = jest.fn();
  const menu = mount(<Menu />, { attachTo: document.body });
  const firstLi = menu.find('li').first()
  test('Oprimir botones del menu e imprimir count, id y \'I\'m not propagating', () => {
    firstLi.simulate('click');
    expect(window.console.log).toHaveBeenCalledTimes(2);
  });
  test('li element with class Active', () => {
    expect(menu.exists('.Active')).toBeTruthy();
  });
});

describe('Menu Snapshot', () => {
  test('Comprobar la UI del componente Menu', () => {
    const menu = create(<Menu />);
    expect(menu.toJSON()).toMatchSnapshot();
  });
});