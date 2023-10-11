import React from 'react';
import {Text, View} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        //flex: 1,
        top: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world! Welcome to TismTalk.</Text>
    </View>
  );
};
export default HelloWorldApp;