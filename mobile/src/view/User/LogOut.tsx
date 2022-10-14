import React from 'react';
import {View, StyleSheet, Text, useColorScheme, Linking} from 'react-native';
import {Colors} from '../../../Style';

const Styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const LogOut = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={Styles.container}>
      <Text
        style={{
          color: isDarkMode ? Colors.textDOpacity : Colors.textWOpacity,
        }}
        onPress={() => {
          console.log('LogOut');
        }}>
        Terms & Privacy
      </Text>
      <Text>0.1.0</Text>
    </View>
  );
};

export default LogOut;
