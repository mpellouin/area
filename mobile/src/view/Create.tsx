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

const Create = () => {
  return (
    <View style={Styles.container}>
      <Text>Create</Text>
      <View style={Styles.navbar}>
        <Navbar page={'Create'} />
      </View>
    </View>
  );
};

export default Create;
