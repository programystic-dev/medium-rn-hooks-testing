import React from 'react';
import {DetailsScreen} from '../screens';
import {cleanup, render} from 'react-native-testing-library';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const MockedNavigator = ({component, params = {}}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

describe('Details', () => {
  afterEach(cleanup); //Unmounts React trees that were mounted with render to prevent memory leak.

  it('should render correctly', () => {
    const {toJSON} = render(
      <MockedNavigator
        component={DetailsScreen}
        params={{data: 'Fake data'}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
