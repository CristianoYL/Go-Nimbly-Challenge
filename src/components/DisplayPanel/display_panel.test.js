import React from 'react';
import renderer from 'react-test-renderer';
import DisplayPanel from './display_panel';

test('DisplayPanel without children', () => {
  const component = renderer.create(<DisplayPanel />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('DisplayPanel with one child', () => {
  const component = renderer.create(
    <DisplayPanel>
      <div />
    </DisplayPanel>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('DisplayPanel with two children', () => {
  const component = renderer.create(
    <DisplayPanel>
      <h1>Test</h1>
      <div />
    </DisplayPanel>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('DisplayPanel with nested children', () => {
  const component = renderer.create(
    <DisplayPanel>
      <div>
        <h1>Test</h1>
      </div>
    </DisplayPanel>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
