import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldApp from './components/HelloWorld';
import ControlPanel from './components/ControlPanel';
import GenerateButton from './components/GenerateButton';
import ContentDisplay from './components/ContentDisplay';
import { useState } from 'react';

export default function App() {
  const [contentData, setContentData] = useState('Click "Generate" To Begin!');
  const [contentType, setContentType] = useState('Fact');
  const [blankSlate, setBlankSlate] = useState(true);

  return (
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    */
    <View style={styles.container}>
      <View>
        <ContentDisplay content={contentData} style={styles.contentDisplay} blankSlate={blankSlate} setBlankSlate={setBlankSlate}/>
      </View>
      <View style={styles.control}>
        <ControlPanel setContentType={setContentType} contentType={contentType} />
        <GenerateButton setContentData={setContentData} contentType={contentType} blankSlate={blankSlate} setBlankSlate={setBlankSlate}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '15%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentDisplay: {
    flex: 1,
  },
  control: {
    position: 'absolute',
    bottom: '30%',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
