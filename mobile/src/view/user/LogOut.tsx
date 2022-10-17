import React from 'react';
import {View, StyleSheet, Text, useColorScheme} from 'react-native';

import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Colors} from '../../../Style';

const Styles = StyleSheet.create({
  container: {
    height: 58,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 40,
    borderTopWidth: 1,
  },
  text: {
    paddingLeft: 50,
    fontSize: 18,
    fontWeight: '500',
  },
});

const LogOut = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        Styles.container,
        {
          borderTopColor: isDarkMode ? Colors.minorD : Colors.minorW,
        },
      ]}>
      <FontAwesomeIcon
        icon={faRightFromBracket}
        size={25}
        color={isDarkMode ? Colors.majorD : Colors.majorW}
      />
      <Text
        style={[
          Styles.text,
          {color: isDarkMode ? Colors.textD : Colors.textW},
        ]}>
        Log out
      </Text>
    </View>
  );
};

export default LogOut;
