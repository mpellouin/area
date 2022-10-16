import React from 'react';
import {View, StyleSheet} from 'react-native';

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

const UserServices = () => {
  return (
    <View style={Styles.container}>
      <TitleApp title="My Services" path="User" />
      <View style={Styles.end}>
        <Credit />
      </View>
    </View>
  );
};

export default UserServices;
