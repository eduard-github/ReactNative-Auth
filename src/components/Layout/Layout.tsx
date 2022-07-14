import React from 'react';
import {StyleSheet, View} from 'react-native';

export type Props = {
  children: any;
};

export const Layout: React.FC<Props> = ({children}) => (
  <View style={styles.layout}>{children}</View>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 16,
    backgroundColor: '#193a6e',
  },
});
