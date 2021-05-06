import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../modules/pages/LoginScreen';
import SignUpScreen from '../modules/pages/SignUpScreen';
import { Routes } from './routes';

const AuthenticationStack = createStackNavigator();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{ headerShown: false }}
    >
      <AuthenticationStack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <AuthenticationStack.Screen
        name={Routes.SIGN_UP}
        component={SignUpScreen}
      />
    </AuthenticationStack.Navigator>
  );
};
