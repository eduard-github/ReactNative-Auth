import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from './app-routes';
import {DashboardScreen} from '../screens/root';

const Stack = createNativeStackNavigator();

export const DashboardNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppRoutes.DASHBOARD} component={DashboardScreen} />
    </Stack.Navigator>
  );
};
