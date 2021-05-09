import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../providers/AuthenticationProvider';
import { AuthenticationNavigator } from './AuthenticationNavigator';
import * as SplashScreen from 'expo-splash-screen';

export default function Navigation({}: {}): any {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  const { userData, loading } = useContext(AuthenticationContext);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (!loading) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [loading]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!(userData !== null && userData.token) ? (
        <Stack.Screen name="Auth" component={AuthenticationNavigator} />
      ) : (
        <Stack.Screen name="App" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
}
