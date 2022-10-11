import React, {type PropsWithChildren} from 'react';
import {useColorScheme, View, StyleSheet, Pressable} from 'react-native';

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../../Style';

const Styles = StyleSheet.create({
  comeBack: {
    margin: 15,
  },
});

const ButtonBack: React.FC<
  PropsWithChildren<{
    path: string;
  }>
> = ({path}) => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={Styles.comeBack}>
      <Pressable
        onPress={() => {
          navigation.navigate(path);
        }}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={25}
          color={isDarkMode ? Colors.majorD : Colors.majorW}
        />
      </Pressable>
    </View>
  );
};

export default ButtonBack;
