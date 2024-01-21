import React from 'react';
import { create } from 'react-test-renderer';

import TextButton from '../TextButton';

jest.unmock('../TextButton.tsx');

const props = {
  onPress: () => {
    console.log('Press');
  },
  text: 'some text',
};

it('TextButton renders correctly with camera icon', () => {
  const tree = create(<TextButton {...props} iconLeft={'calendar'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TextButton renders correctly with repeat icon', () => {
  const tree = create(<TextButton {...props} iconLeft={'repeat'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
