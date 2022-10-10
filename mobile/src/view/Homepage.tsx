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

const Homepage = () => {
  return (
    <View style={Styles.container}>
      <Text>Homepage</Text>
      <View style={Styles.navbar}>
        <Navbar page={'Homepage'} />
      </View>
    </View>
  );
};

export default Homepage;
