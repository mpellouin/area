import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navbar from '../components/Navbar';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  navbar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const User = () => {
  return (
    <View style={Styles.container}>
      <Text>User</Text>
      <View style={Styles.navbar}>
        <Navbar page={'User'} />
      </View>
    </View>
  );
};

export default User;
