import React, {type PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

const Styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

const Separator: React.FC<
  PropsWithChildren<{
    width: number;
    color: string;
    marginTop: number;
    marginLeft: number;
  }>
> = ({width, color, marginTop, marginLeft}) => {
  return (
    <View
      style={[
        Styles.separator,
        {
          width: width,
          marginTop: marginTop,
          marginLeft: marginLeft,
          borderBottomColor: color,
        },
      ]}
    />
  );
};

export default Separator;
