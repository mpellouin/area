import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  TextInput,
} from 'react-native';

import {faAt, faLock, faUnlock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../../../Style';

import SignUpSvg from '../../../components/svg/SignUpSvg';
import Title from '../../../components/Title';
import Separator from '../../../components/Separator';
import ButtonBack from '../../../components/buttons/ButtonBack';

import ButtonRegister from './ButtonRegister';
import AuthRegister from './AuthRegister';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  containerSvg: {
    alignItems: 'center',
  },
  containerAuth: {
    width: '100%',
    marginBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerInput: {
    marginTop: 20,
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
  registerSeparator: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  loginInput: {
    marginTop: 15,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
});

const Register = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <ScrollView style={Styles.container}>
      <ButtonBack path={'Login'} />
      <View style={Styles.containerSvg}>
        <SignUpSvg />
      </View>
      <Title title="Sign up" />
      <View style={Styles.containerAuth}>
        <View>
          <AuthRegister title={'Google'} />
        </View>
        <View>
          <AuthRegister title={'Github'} />
        </View>
        <View>
          <AuthRegister title={'Twitter'} />
        </View>
      </View>
      <View style={Styles.registerSeparator}>
        <Text
          style={{
            color: isDarkMode ? Colors.textD : Colors.textW,
            textAlignVertical: 'center',
          }}>
          OR register with email...
        </Text>
      </View>
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
        <Separator marginTop={10} marginLeft={45} width={270} />
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
            maxLength={35}
          />
        </View>
        <Separator marginTop={10} marginLeft={45} width={270} />
      </View>
      <View>
        <View style={Styles.containerInput}>
          <FontAwesomeIcon
            icon={faLock}
            size={20}
            color={isDarkMode ? Colors.textDOpacity : Colors.textWOpacity}
          />
          <TextInput
            style={Styles.input}
            placeholder="Confirm password*"
            placeholderTextColor={
              isDarkMode ? Colors.textDOpacity : Colors.textWOpacity
            }
            onChangeText={newConfirmPwd => {
              setConfirm(newConfirmPwd);
            }}
            secureTextEntry={true}
            maxLength={32}
          />
        </View>
        <Separator marginTop={10} marginLeft={45} width={270} />
      </View>
      <ButtonRegister
        title="Sign Up"
        width={160}
        email={email}
        pwd={pwd}
        confirm={confirm}
      />
      <View style={Styles.loginInput}>
        <Text
          style={{
            color: isDarkMode ? Colors.textD : Colors.textW,
            textAlignVertical: 'center',
          }}>
          Joined us before ?
          <Text
            style={{color: isDarkMode ? Colors.majorD : Colors.majorW}}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;
