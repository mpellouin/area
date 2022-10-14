import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Credit from '../../../components/Credit';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  containerScrollView: {
    // justifyContent: 'space-between',
  },
  end: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const UserServices = () => {
  return (
    <ScrollView style={Styles.containerScrollView}>
      <Text>USER SERVICES</Text>
      <Credit />
    </ScrollView>
  );
};

export default UserServices;
