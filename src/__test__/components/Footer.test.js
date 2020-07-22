import React from 'react';
import { shallow } from 'enzyme';
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

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});