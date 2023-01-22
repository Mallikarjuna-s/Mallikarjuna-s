import React, {memo} from 'react';
import {Text, View} from 'react-native';

const TextComponets = ({...props}) => {
  return (
    <>
      <View style={[props.styles]}>
        <Text>{props.text}</Text>
      </View>
    </>
  );
};

export default memo(TextComponets);
