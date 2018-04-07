import React from 'react';
import renderer from 'react-test-renderer';
import UserPanel from './user_panel';
import { askNewton } from '../../libs/newton_api/newton';

jest.mock('../../libs/newton_api/newton');

const updateResult = () => {};

test('User panel renders', () => {
  const component = renderer.create(<UserPanel message="test" updateResult={updateResult} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
