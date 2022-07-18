import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from './app-routes';
import {ResetPasswordScreen, SignInScreen, SignUpScreen} from '../screens/auth';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sign In"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppRoutes.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={AppRoutes.SIGN_UP} component={SignUpScreen} />
      <Stack.Screen
        name={AppRoutes.RESET_PASSWORD}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
