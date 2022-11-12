import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
  Pressable,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

import {Colors} from '../../Style';

import Navbar from '../components/Navbar';
import TitleApp from '../components/TitleApp';
import SeparatorColor from '../components/SeparatorColor';
import {removeItem} from '../components/storage/localStorage';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  navbar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textError: {
    marginTop: 15,
    textAlign: 'center',
  },
  containerButton: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 24,
  },
  button: {
    height: 35,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  textButton: {
    color: Colors.textD,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Homepage = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const [list, setList] = useState(undefined);

  return (
    <>
      <ScrollView
        style={[
          {
            backgroundColor: isDarkMode
              ? Colors.backgroundD
              : Colors.backgroundW,
          },
          Styles.container,
        ]}>
        <View style={Styles.header}>
          <TitleApp title="Let's start !" path="" backbutton={false} />
          <FontAwesomeIcon
            icon={faUserCircle}
            size={25}
            color={isDarkMode ? Colors.majorD : Colors.majorW}
          />
        </View>
        <SeparatorColor width={360} marginTop={0} marginLeft={0} />
        {!list ? (
          <Text
            style={[
              {
                color: isDarkMode ? Colors.textD : Colors.textW,
              },
              Styles.textError,
            ]}>
            You have no action reaction for now, create one !
          </Text>
        ) : (
          <></>
        )}
        <View style={Styles.containerButton}>
          <Pressable
            style={({pressed}) => [
              Styles.button,
              {
                backgroundColor: isDarkMode
                  ? pressed
                    ? Colors.majorDOpacity
                    : Colors.majorD
                  : pressed
                  ? Colors.majorWOpacity
                  : Colors.majorW,
              },
              {
                width: 240,
              },
            ]}
            onPress={() => {
              navigation.navigate('Create');
            }}>
            <Text style={Styles.textButton}>Create an AREA</Text>
          </Pressable>
        </View>
      </ScrollView>
      <View style={Styles.navbar}>
        <Navbar page={'Homepage'} />
      </View>
    </>
  );
};

export default Homepage;
