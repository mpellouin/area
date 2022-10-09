import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import SignUpSvg from '../../components/svg/SignUpSvg';

const Styles = StyleSheet.create({});

const Register = () => {
  return (
    <View>
      <FontAwesomeIcon icon={faArrowLeft} />
      <Text>Register</Text>
      <SignUpSvg />
    </View>
  );
};

export default Register;
