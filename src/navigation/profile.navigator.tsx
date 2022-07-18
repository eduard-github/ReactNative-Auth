import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from './app-routes';
import {EditProfileScreen, ProfileScreen} from '../screens/root';

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppRoutes.PROFILE} component={ProfileScreen} />
      <Stack.Screen
        name={AppRoutes.EDIT_PROFILE}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
};
