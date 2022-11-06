import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

import Navbar from '../../components/Navbar';

import {Colors} from '../../../Style';
import TitleApp from '../../components/TitleApp';
import SeparatorColor from '../../components/SeparatorColor';

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
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        {backgroundColor: isDarkMode ? Colors.backgroundD : Colors.backgroundW},
        Styles.container,
      ]}>
      <TitleApp title="Create your AREAs !" path="" backbutton={false} />
      <SeparatorColor width={360} marginTop={0} marginLeft={0} />

      <View style={Styles.navbar}>
        <Navbar page={'Create'} />
      </View>
    </View>
  );
};

export default Create;
