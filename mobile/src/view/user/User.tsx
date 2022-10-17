import React from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';

import {
  faInfoCircle,
  faPalette,
  faQuestionCircle,
  faStream,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';

import Credit from '../../components/Credit';
import Navbar from '../../components/Navbar';
import ButtonParams from './ButtonParams';

import LogOut from './LogOut';
import Profile from './Profile';
import {Colors} from '../../../Style';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  containerParams: {
    height: '88%',
    justifyContent: 'space-between',
  },
  end: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const User = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        {backgroundColor: isDarkMode ? Colors.backgroundD : Colors.backgroundW},
        Styles.container,
      ]}>
      <View style={Styles.containerParams}>
        <Profile email={'lisa.glaziou@epitech.eu'} />
        <ButtonParams
          icon={faUserCog}
          title={'My Profile'}
          component={'UserProfile'}
        />
        <ButtonParams icon={faPalette} title={'Appearance'} />
        <ButtonParams
          icon={faStream}
          title={'My Services'}
          component={'UserServices'}
        />
        <ButtonParams
          icon={faQuestionCircle}
          title={'Help Center'}
          component={'HelpCenter'}
        />
        <ButtonParams
          icon={faInfoCircle}
          title={'About AREA'}
          component={'AboutArea'}
        />
        <ButtonParams
          icon={faInfoCircle}
          title={'About Us'}
          component={'AboutUs'}
        />

        <LogOut />
      </View>
      <View style={Styles.end}>
        <Credit />
        <Navbar page={'User'} />
      </View>
    </View>
  );
};

export default User;
