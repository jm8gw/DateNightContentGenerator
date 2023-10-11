import React from 'react';
import {Text, View} from 'react-native';
import { ButtonGroup } from 'react-native-elements';

const ControlPanel = () => {
  const buttons = ['Fact', 'Quote', 'Joke'];

  return (
    <ButtonGroup
      buttons={buttons}
      containerStyle={{ height: 100 }}
    />
  );
};

export default ControlPanel;