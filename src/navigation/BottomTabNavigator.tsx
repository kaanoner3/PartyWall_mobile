import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Routes } from './routes';
import ImageAtom from '../modules/atoms/ImageAtom';
import Home from '../../assets/images/home.png';
import Profile from '../../assets/images/profile-user.png';
import HomeScreen from '../modules/pages/HomeScreen';
import ProfileScreen from '../modules/pages/ProfileScreen';
import CreateItemScreen from '../modules/pages/CreateItemScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): any {
  return (
    <BottomTab.Navigator
      initialRouteName={Routes.HOME_TAB}
      tabBarOptions={{
        showLabel: false,
        inactiveBackgroundColor: '#e38a46',
        activeBackgroundColor: '#d16513',
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
        options={({ route }) => ({
          tabBarIcon: () => (
            <ImageAtom style={{ tintColor: '#fff' }} source={Home} />
          ),
        })}
      />
      <BottomTab.Screen
        name={Routes.PROFILE_TAB}
        component={TabTwoNavigator}
        options={({ route }) => ({
          tabBarIcon: () => (
            <ImageAtom style={{ tintColor: '#fff' }} source={Profile} />
          ),
          tabBarVisible: ((route: any) => {
            const routeName = getFocusedRouteNameFromRoute(route);
            return routeName !== Routes.CREATE_ITEM;
          })(route),
        })}
      />
    </BottomTab.Navigator>
  );
}

const HomeTabStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <HomeTabStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeTabStack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
    </HomeTabStack.Navigator>
  );
}

const ProfileTabStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <ProfileTabStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileTabStack.Screen
        name={Routes.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <ProfileTabStack.Screen
        name={Routes.CREATE_ITEM}
        component={CreateItemScreen}
      />
    </ProfileTabStack.Navigator>
  );
}
