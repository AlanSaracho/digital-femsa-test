import React from 'react';
import renderer from 'react-test-renderer';
import { ListItem } from './ListItem';

describe('<ListItem>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ListItem  title='lorem' description='ipsum' avatarSource='lorem'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
