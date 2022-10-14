import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Credit from '../../components/Credit';
import Navbar from '../../components/Navbar';
import Profile from './Profile';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  end: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const User = () => {
  return (
    <View style={Styles.container}>
      <Profile email={'lisa.glaziou@epitech.eu'} />
      <View style={Styles.end}>
        <Credit />
        <Navbar page={'User'} />
      </View>
    </View>
  );
};

export default User;
