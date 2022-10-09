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

import {Colors} from '../../../Style';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import LoginSvg from '../../components/svg/LoginSvg';
import {useNavigation} from '@react-navigation/native';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  containerSvg: {
    marginTop: 25,
    alignItems: 'center',
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
  },
  separator: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25,
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
        <LoginSvg props={undefined} />
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
            placeholder="email ID"
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
            placeholder="password"
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
      </View>
      <Button title="Login" width={160} email={email} pwd={pwd} />
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
            Register
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
