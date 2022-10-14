import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

import Navbar from '../components/Navbar';

import {Colors} from '../../Style';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  navbar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const Activity = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        {backgroundColor: isDarkMode ? Colors.backgroundD : Colors.backgroundW},
        Styles.container,
      ]}>
      <Text>Activity</Text>
      <View style={Styles.navbar}>
        <Navbar page={'Activity'} />
      </View>
    </View>
  );
};

export default Activity;
