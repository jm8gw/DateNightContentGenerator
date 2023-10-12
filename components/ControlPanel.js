import React from 'react';
import {Text, View} from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { useState } from 'react';

const ControlPanel = ({ setContentType }) => {
  const buttons = ['Fact', 'Quote', 'Joke'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
    console.log(buttons[selectedIndex]);
    setContentType(buttons[selectedIndex]);
  };

  return (
    <ButtonGroup
      buttons={buttons}
      selectedIndex={selectedIndex}
      onPress={updateIndex}
      containerStyle={{ height: 100 }}
    />
  );
};

export default ControlPanel;