import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';

import {Colors} from './Style';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.backgroundD : Colors.backgroundW,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.backgroundD : Colors.backgroundW}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <LearnMoreLinks />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
