import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

describe('<Header />', () => {
  const header = shallow(<Header />);
  test('Render del componente Header', () => {
    expect(header.length).toEqual(1);
  });

  test('Render del <Menu /> en el <Header />', () => {
    expect(header.contains(<Menu />)).toBeTruthy();
  });
});

describe('Header Snapshot', () => {
  test('Comprobar la UI del componente Header', () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});