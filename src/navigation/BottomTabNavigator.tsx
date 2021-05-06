import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Routes } from './routes';
import ImageAtom from '../modules/atoms/ImageAtom';
import Home from '../../assets/images/home.png';
import Profile from '../../assets/images/profile-user.png';
import EmptyScreen from '../modules/organism/EmptyScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): any {
  return (
    <BottomTab.Navigator
      initialRouteName={Routes.HOME_TAB}
      tabBarOptions={{
        showLabel: false,
        inactiveBackgroundColor: 'gray',
        activeBackgroundColor: 'blue',
        style: {
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          height: 50,
        },
      }}
    >
      <BottomTab.Screen
        name={Routes.HOME_TAB}
        component={TabOneNavigator}
        options={{
          tabBarIcon: () => <ImageAtom source={Home} />,
        }}
      />
      <BottomTab.Screen
        name={Routes.PROFILE_TAB}
        component={TabTwoNavigator}
        options={{
          tabBarIcon: () => <ImageAtom source={Profile} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeTabStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <HomeTabStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileTabStack.Screen
        name={Routes.HOME_SCREEN}
        component={EmptyScreen}
      />
    </HomeTabStack.Navigator>
  );
}

const ProfileTabStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <ProfileTabStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileTabStack.Screen
        name={Routes.PROFILE_SCREEN}
        component={EmptyScreen}
      />
    </ProfileTabStack.Navigator>
  );
}
