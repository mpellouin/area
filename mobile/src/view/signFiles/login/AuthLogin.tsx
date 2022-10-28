import React, {useEffect, useState} from 'react';
import {
  Linking,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
  Modal,
} from 'react-native';

import {WebView} from 'react-native-webview';

import {useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

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

  useEffect(() => {
    Linking.addEventListener('url', url => handleOpenUrl(url.url));
    Linking.getInitialURL().then((url: any) => {
      if (url) {
        console.log(url);
      }
    });
    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);

  const handleOpenUrl = (url: string) => {
    console.log(url);
  };

  const openURL = (url: string) => {
    setURL(url);
  };

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
            openURL('http://51.178.29.26:8080/auth/google');
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
