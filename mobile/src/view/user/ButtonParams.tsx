import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, Text, useColorScheme, Pressable} from 'react-native';

import {faAngleRight, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Colors} from '../../../Style';
import {useNavigation} from '@react-navigation/native';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerPressable: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 40,
    paddingRight: 20,
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
});

const ButtonParams: React.FC<
  PropsWithChildren<{
    icon: IconDefinition;
    title: string;
    component?: string;
  }>
> = ({icon, title, component}) => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={Styles.container}>
      <Pressable
        onPress={() => {
          if (component) navigation.navigate(component);
        }}
        style={({pressed}) => [
          {
            backgroundColor: isDarkMode
              ? pressed
                ? Colors.textWOpacity
                : Colors.backgroundD
              : pressed
              ? Colors.textDOpacity
              : Colors.backgroundW,
          },
          Styles.containerPressable,
        ]}>
        <View style={Styles.containerTitle}>
          <FontAwesomeIcon
            icon={icon}
            size={25}
            color={isDarkMode ? Colors.majorD : Colors.majorW}
          />
          <Text
            style={[
              Styles.text,
              {color: isDarkMode ? Colors.textD : Colors.textW},
            ]}>
            {title}
          </Text>
        </View>
        <FontAwesomeIcon
          icon={faAngleRight}
          size={25}
          color={isDarkMode ? Colors.textD : Colors.textW}
        />
      </Pressable>
    </View>
  );
};

export default ButtonParams;
