import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = shallow(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render de 3 elementos', () => {
    expect(footer.children()).toHaveLength(3);
  });
});

describe('Footer Behavior', () => {
  window.console.log = jest.fn();
  const footer = mount(<Footer />, { attachTo: document.body });
  const firstA = footer.find('button').first();
  test('Oprimir botones del footer e imprimir count, id y \'I\'m not propagating', () => {
    firstA.simulate('click');
    expect(window.console.log).toHaveBeenCalledTimes(2);
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});