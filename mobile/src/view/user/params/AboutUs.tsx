import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ButtonBack from '../../../components/buttons/ButtonBack';

import Credit from '../../../components/Credit';
import TitleApp from '../../../components/TitleApp';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  end: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const AboutUs = () => {
  return (
    <View style={Styles.container}>
      <TitleApp title="About Us" path="User" />
      <View style={Styles.end}>
        <Credit />
      </View>
    </View>
  );
};

export default AboutUs;
