import React from 'react';
import {Text, Button} from 'react-native';
import {Layout} from '../../../components/Layout/Layout';

export const ProfileScreen = ({navigation}: any) => {
  return (
    <Layout>
      <Text>Profile</Text>
      <Button
        title="To Edit Profile"
        onPress={() => navigation.navigate('Edit Profile')}
      />
    </Layout>
  );
};
