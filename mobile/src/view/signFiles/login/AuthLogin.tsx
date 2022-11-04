import React, {useEffect, useState} from 'react';
import {
  Linking,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
  Modal,
  Alert,
} from 'react-native';

import {WebView} from 'react-native-webview';

import {useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from '../../../../Style';
import GoogleSvg from '../../../components/svg/GoogleSvg';
import TwitterSvg from '../../../components/svg/TwitterSvg';

const Styles = StyleSheet.create({
  container: {
    width: 70,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
});

type AppProps = {
  title: string;
};

const AuthLogin = ({title}: AppProps) => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const [isPressed, setIsPressed] = useState(false);

  const [uri, setURL] = useState('');

  Linking.addEventListener('url', handleUrl)

  async function handleUrl(event: any) {
    try {
        const accessToken = await getSearchParamFromURL(event.url, "token")
        if(accessToken != null) {
            console.log(accessToken)
            await AsyncStorage.setItem(`${title}accessToken`, accessToken)
            navigation.navigate('User')
            Linking.removeAllListeners('url')
        } else {
            Alert.alert("An error occured while signin you")
        }
    } catch (err) {
        throw("An error occured: " + err)
    }
  }

  const openBrowser = (url: string) => {
      Linking.openURL(url)
  };

  const getSearchParamFromURL = (url: string, param: string) => {
      const include = url.includes(param)
      if (!include) return null
      const params = url.split(/([?,=])/)
      const index = params.indexOf(param)
      const value = params[index + 2]
      return value
  }


  const IconChoice = (name: string) => {
    switch (name) {
      case 'Google':
        return <GoogleSvg />;
      case 'Github':
        return (
          <FontAwesomeIcon
            icon={faGithub}
            size={30}
            color={isDarkMode ? Colors.textD : Colors.textW}
          />
        );
      case 'Twitter':
        return <TwitterSvg />;
    }
  };

  return (
    <>
      {uri != '' ? (
        <Modal>
          <WebView
            originWhitelist={['*']}
            source={{uri}}
            userAgent={'Chrome/18.0.1025.133 Mobile Safari/535.19'}
          />
        </Modal>
      ) : (
        <Pressable
          onPress={() => {
            openBrowser(`http://area.eu-west-3.elasticbeanstalk.com/auth/${title}`);
          }}>
          <View
            style={[
              Styles.container,
              {
                borderColor: isDarkMode
                  ? isPressed
                    ? Colors.minorD
                    : '#A9A9A9'
                  : isPressed
                  ? Colors.minorW
                  : Colors.textW,
              },
            ]}>
            {IconChoice(title)}
          </View>
        </Pressable>
      )}
    </>
  );
};

export default AuthLogin;
