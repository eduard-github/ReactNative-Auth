import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {AppRoutes} from './app-routes';
import {AboutScreen} from '../screens/root';
import {ProfileNavigator} from './profile.navigator';
import {DashboardNavigator} from './dashboard.navigator';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
export const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="DashboardStack"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="DashboardStack"
        component={DashboardNavigator}
        options={{
          tabBarLabel: 'Dashboard',
        }}
      />
      <BottomTab.Screen
        name="ProfileStack"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </BottomTab.Navigator>
  );
};

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Dashboard"
        onPress={() => props.navigation.navigate('Dashboard')}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label="About"
        onPress={() => props.navigation.navigate('About')}
      />
    </DrawerContentScrollView>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeStack" component={BottomTabs} />
      <Stack.Screen name={AppRoutes.ABOUT} component={AboutScreen} />
      {/* <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="AccountDetail" component={AccountDetailsScreen} /> */}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="RootStack" component={StackNavigator} />
    </Drawer.Navigator>
  );
};
