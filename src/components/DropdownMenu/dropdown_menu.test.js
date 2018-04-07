import React from 'react';
import renderer from 'react-test-renderer';
import DropdownMenu from './dropdown_menu';

test('DropdownMenu without className', () => {
  const onSelected = () => {};
  const component = renderer.create(
    <DropdownMenu onSelected={onSelected} hint="test">
      <option value="simplify">Simplify</option>
    </DropdownMenu>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('DropdownMenu with all props', () => {
  const onSelected = () => {};
  const component = renderer.create(
    <DropdownMenu onSelected={onSelected} hint="test hint" className="test-name">
      <option value="simplify">Simplify</option>
    </DropdownMenu>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('props.onSelected gets called', () => {
  let oldValue = false;
  const newValue = true;
  const fakeEvent = { target: { value: true } }
  const onSelected = (value) => {
    oldValue = value;
  };
  const component = renderer.create(
    <DropdownMenu onSelected={onSelected} hint="test hint" className="test-name">
      <option value="simplify">Simplify</option>
    </DropdownMenu>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.getInstance().handleChange(fakeEvent);
  expect(oldValue).toEqual(newValue);
});
