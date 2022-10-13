import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  ScrollView,
  Text,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAt, faUnlock} from '@fortawesome/free-solid-svg-icons';

import {useNavigation} from '@react-navigation/native';
import { Button as ReactButton } from 'react-native';
import Auth from './auth';

import {Colors} from '../../../Style';

import Title from '../../components/Title';
import ButtonLogin from '../../components/buttons/ButtonLogin';
import Separator from '../../components/Separator';
import LoginSvg from '../../components/svg/LoginSvg';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  containerSvg: {
    marginTop: 25,
    alignItems: 'center',
  },
  containerAuth: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerRectangle: {
    width: 70,
    height: 35,
    borderRadius: 8,
    borderWidth: 1,
  },
  containerInput: {
    marginLeft: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 35,
    marginBottom: 2,
    fontSize: 18,
    justifyContent: 'center',
    textAlignVertical: 'center',
    padding: 0,
    width: '80%',
  },
  forgotPasswordInput: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    textAlign: 'right',
    paddingRight: 35,
  },
  separator: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  },
  registerInput: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
});

const Login = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.containerSvg}>
        <LoginSvg />
      </View>
      <Title title="Login" />
      <View>
        <View style={Styles.containerInput}>
          <FontAwesomeIcon
            icon={faAt}
            size={20}
            color={isDarkMode ? Colors.textDOpacity : Colors.textWOpacity}
          />
          <TextInput
            style={Styles.input}
            placeholder="Email ID*"
            placeholderTextColor={
              isDarkMode ? Colors.textDOpacity : Colors.textWOpacity
            }
            onChangeText={newEmail => {
              setEmail(newEmail);
            }}
            maxLength={28}
          />
        </View>
        <Separator
          marginTop={10}
          marginLeft={45}
          color={isDarkMode ? Colors.textD : Colors.textWOpacity}
          width={270}
        />
      </View>
      <View>
        <View style={Styles.containerInput}>
          <FontAwesomeIcon
            icon={faUnlock}
            size={20}
            color={isDarkMode ? Colors.textDOpacity : Colors.textWOpacity}
          />
          <TextInput
            style={Styles.input}
            placeholder="Password*"
            placeholderTextColor={
              isDarkMode ? Colors.textDOpacity : Colors.textWOpacity
            }
            onChangeText={newPwd => {
              setPwd(newPwd);
            }}
            secureTextEntry={true}
            maxLength={32}
          />
        </View>
        <Separator
          marginTop={10}
          marginLeft={45}
          color={isDarkMode ? Colors.textDOpacity : Colors.textWOpacity}
          width={270}
        />
        <Text
          style={[
            Styles.forgotPasswordInput,
            {color: isDarkMode ? Colors.majorD : Colors.majorW},
          ]}
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          Forgot Password ?
        </Text>
      </View>
      <ButtonLogin title="Login" width={160} email={email} pwd={pwd} />
      <View style={Styles.separator}>
        <Separator
          marginTop={15}
          marginLeft={0}
          color={isDarkMode ? Colors.textDOpacity : Colors.textWOpacity}
          width={137.5}
        />
        <Text
          style={{
            color: isDarkMode ? Colors.textD : Colors.textW,
            textAlignVertical: 'center',
          }}>
          OR
        </Text>
        <Separator
          marginTop={15}
          marginLeft={0}
          color={isDarkMode ? Colors.textDOpacity : Colors.textWOpacity}
          width={137.5}
        />
      </View>
      <View style={Styles.containerAuth}>
        <View
          style={[
            Styles.containerRectangle,
            {
              borderColor: isDarkMode ? Colors.textD : Colors.textW,
            },
          ]}></View>
        <View
          style={[
            Styles.containerRectangle,
            {
              borderColor: isDarkMode ? Colors.textD : Colors.textW,
            },
          ]}></View>
        <View
          style={[
            Styles.containerRectangle,
            {
              borderColor: isDarkMode ? Colors.textD : Colors.textW,
            },
          ]}></View>
      </View>
      <View style={Styles.registerInput}>
        <Text
          style={{
            color: isDarkMode ? Colors.textD : Colors.textW,
            textAlignVertical: 'center',
          }}>
          New to AREA ?
          <Text
            style={{color: isDarkMode ? Colors.majorD : Colors.majorW}}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            {' '}
            Register
          </Text>
          <Text
            style={{color: isDarkMode ? Colors.majorD : Colors.majorW}}
            onPress={() => {
              navigation.navigate('Auth');
            }}>
            {' '}
            Auth
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
