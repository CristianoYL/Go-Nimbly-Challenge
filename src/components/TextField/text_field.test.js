import React from 'react';
import renderer from 'react-test-renderer';
import TextField from './text_field';

test('TextField without className', () => {
  const onTextChange = () => {};
  const component = renderer.create(
    <TextField
      onTextChange={onTextChange}
      hint="test"
      />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextPanel with all props', () => {
  const onTextChange = () => {};
  const component = renderer.create(
    <TextField
      hint="test hint"
      onTextChange={onTextChange}
      className="test-class"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('props.onTextChange gets called', () => {
  let oldValue = false;
  const newValue = true;
  const onTextChange = (value) => {
    oldValue = value;
  };
  const component = renderer.create(
    <TextField
      hint="test hint"
      onTextChange={onTextChange}
      className="test-class"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.getInstance().onTextChange(newValue);
  expect(oldValue).toEqual(newValue);
});
