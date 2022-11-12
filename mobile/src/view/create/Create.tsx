import React, {useState} from 'react';
import {View, Text, StyleSheet, useColorScheme, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Dialog, Menu, Paragraph, Portal, Provider} from 'react-native-paper';

import {Colors} from '../../../Style';

import Navbar from '../../components/Navbar';
import TitleApp from '../../components/TitleApp';
import SeparatorColor from '../../components/SeparatorColor';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  text: {
    margin: 15,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
  containerButton: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 20,
    paddingHorizontal: 24,
  },
  button: {
    height: 50,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 260,
  },
  textButton: {
    color: Colors.textD,
    fontSize: 22,
    fontWeight: 'bold',
  },
  navbar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const PopUpError = (setShowError: any) => {
  const [error, setError] = useState(false);
  const hideDialog = () => {
    setError(false);
  };

  return (
    <Portal>
      <Dialog visible={error} onDismiss={hideDialog}>
        <Dialog.Content>
          <Paragraph>Put an action first !</Paragraph>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

const Create = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const [error, setError] = useState(false);
  const hideDialog = () => {
    setError(false);
  };

  const [visibleAction, setVisibleAction] = useState(false);
  const [visibleReaction, setVisibleReaction] = useState(false);

  const [action, setAction] = useState('');
  const [reaction, setReaction] = useState('');

  const openMenu = (type: string) => {
    type === 'action' ? setVisibleAction(true) : setVisibleReaction(true);
  };

  const closeMenu = (type: string) => {
    type === 'action' ? setVisibleAction(false) : setVisibleReaction(false);
  };

  return (
    <View
      style={[
        {backgroundColor: isDarkMode ? Colors.backgroundD : Colors.backgroundW},
        Styles.container,
      ]}>
      <TitleApp title="Create your AREAs !" path="" backbutton={false} />
      <SeparatorColor width={360} marginTop={0} marginLeft={0} />
      <Text
        style={[
          {
            color: isDarkMode ? Colors.textD : Colors.textW,
          },
          Styles.text,
        ]}>
        Don{"'"}t forget to
        <Text
          style={{
            color: isDarkMode ? Colors.majorD : Colors.majorW,
            fontWeight: '500',
          }}
          onPress={() => {
            navigation.navigate('UserServices');
          }}>
          {' '}
          subscribe
        </Text>
        {` to other services\nto create more AREAs !`}
      </Text>
      <SeparatorColor width={360} marginTop={0} marginLeft={0} />
      <Provider>
        <View style={Styles.containerButton}>
          <Menu
            style={Styles.containerButton}
            visible={visibleAction}
            onDismiss={() => closeMenu('action')}
            anchor={
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
                    shadowColor: isDarkMode ? Colors.textD : Colors.textW,
                  },
                ]}
                onPress={() => openMenu('action')}>
                <Text style={Styles.textButton}>
                  {action === '' ? 'Action' : action}
                </Text>
              </Pressable>
            }>
            <Menu.Item
              onPress={() => {
                setAction('Item 1');
                closeMenu('action');
              }}
              title="Item 1"
            />
          </Menu>
        </View>
      </Provider>
      <Provider>
        <View style={Styles.containerButton}>
          <Menu
            style={Styles.containerButton}
            visible={visibleReaction}
            onDismiss={() => closeMenu('reaction')}
            anchor={
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
                    shadowColor: isDarkMode ? Colors.textD : Colors.textW,
                  },
                ]}
                onPress={() => {
                  action === '' ? setError(true) : openMenu('reaction');
                }}>
                <Text style={Styles.textButton}>
                  {reaction === '' ? 'Reaction' : reaction}
                </Text>
              </Pressable>
            }>
            <>
              <Menu.Item
                onPress={() => {
                  setReaction('te');
                  closeMenu('reaction');
                }}
                title="Item 1"
              />
            </>
          </Menu>
          {error === true ? (
            <Portal>
              <Dialog
                visible={error}
                onDismiss={() => {
                  hideDialog();
                }}>
                <Dialog.Content>
                  <Paragraph>Put an action first !</Paragraph>
                </Dialog.Content>
              </Dialog>
            </Portal>
          ) : (
            <></>
          )}
        </View>
      </Provider>

      <View style={Styles.navbar}>
        <Navbar page={'Create'} />
      </View>
    </View>
  );
};

export default Create;
