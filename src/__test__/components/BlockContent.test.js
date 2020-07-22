import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ChildMock from '../../__mocks__/ChildMock';
import BlockContent from '../../components/BlockContent';

describe('<BlockContent></BlockContent>', () => {
  const blockContent = shallow(
    <BlockContent>
      <ChildMock />
    </BlockContent>
  );
  test('Render del componente BlockContent', () => {
    expect(blockContent.length).toEqual(1);
  });

  test('Render del children', () => {
    expect(blockContent.contains(<ChildMock />)).toBeTruthy();
  });
});

describe('BlockContent Snapshot', () => {
  test('Comprobar la UI del componente BlockContent', () => {
    const blockContent = create(
      <BlockContent>
        <ChildMock />
      </BlockContent>
    );
    expect(blockContent.toJSON()).toMatchSnapshot();
  });
});