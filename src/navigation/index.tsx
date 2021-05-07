import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { useContext } from 'react';
import { AuthenticationContext } from '../providers/AuthenticationProvider';
import { AuthenticationNavigator } from './AuthenticationNavigator';

export default function Navigation({}: {}): any {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  const { token } = useContext(AuthenticationContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <Stack.Screen name="Auth" component={AuthenticationNavigator} />
      ) : (
        <Stack.Screen name="App" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
}
