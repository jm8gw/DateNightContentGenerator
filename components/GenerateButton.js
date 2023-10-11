import React from 'react';
import {Text, View} from 'react-native';
import { Button } from 'react-native-elements';
//import LinearGradient from 'react-native-linear-gradient';

const GenerateButton = () => {
  return (
    <Button
      /*
      ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
        colors: ['red', 'pink'],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      */
      title="Generate"
    />
  );
};
export default GenerateButton;