import React from 'react';
import {HomeScreen} from '../screens';
import {cleanup, render} from 'react-native-testing-library';
import {MockedNavigator} from '../common';

describe('Details', () => {
  afterEach(cleanup); //Unmounts React trees that were mounted with render to prevent memory leak.

  it('should render correctly', () => {
    const {toJSON} = render(<MockedNavigator component={HomeScreen} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
