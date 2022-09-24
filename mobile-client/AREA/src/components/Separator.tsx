import React, {type PropsWithChildren} from 'react';
import {View} from 'react-native';

const Separator: React.FC<
  PropsWithChildren<{
    width: number;
    color: string;
    margin: number;
  }>
> = ({width, color, margin}) => {
  return (
    <View
      style={{
        height: 1,
        width: width,
        backgroundColor: color,
        marginTop: margin,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}></View>
  );
};

export default Separator;
