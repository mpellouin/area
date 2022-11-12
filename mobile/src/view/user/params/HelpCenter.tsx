import React from 'react';
import {View, StyleSheet} from 'react-native';

import Credit from '../../../components/Credit';
import SeparatorColor from '../../../components/SeparatorColor';
import TitleApp from '../../../components/TitleApp';

const Styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  end: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const HelpCenter = () => {
  return (
    <View style={Styles.container}>
      <TitleApp title="Help Center" path="User" backbutton={true} />
      <SeparatorColor width={360} marginTop={0} marginLeft={0} />
      <View style={Styles.end}>
        <Credit />
      </View>
    </View>
  );
};

export default HelpCenter;
