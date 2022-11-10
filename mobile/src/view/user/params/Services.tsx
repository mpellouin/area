import React, {PropsWithChildren, useEffect, useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Colors} from '../../../../Style';

const Styles = StyleSheet.create({
  container: {
    margin: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 50,
    fontSize: 18,
    fontWeight: '500',
  },
  textEnd: {
    fontSize: 18,
    fontWeight: '400',
  },
});

const Services: React.FC<
  PropsWithChildren<{
    service: {
      name: string;
      isSubbed: boolean;
      icon: IconDefinition;
    };
  }>
> = ({service}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={Styles.container}>
      <View style={Styles.containerTitle}>
        <FontAwesomeIcon
          icon={service.icon}
          size={25}
          color={isDarkMode ? Colors.majorD : Colors.majorW}
        />
        <Text
          style={[
            Styles.text,
            {color: isDarkMode ? Colors.textD : Colors.textW},
          ]}>
          {service.name}
        </Text>
      </View>
      <Text
        style={[
          Styles.textEnd,
          {color: isDarkMode ? Colors.minorD : Colors.minorW},
        ]}
        onPress={() => {
          service.isSubbed = !service.isSubbed;
          console.log(service.isSubbed);
        }}>
        {service.isSubbed === true ? 'Unsubscribe' : 'Subscribe'}
      </Text>
    </View>
  );
};

export default Services;
