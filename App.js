import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldApp from './components/HelloWorld';
import ControlPanel from './components/ControlPanel';
import GenerateButton from './components/GenerateButton';
import ContentDisplay from './components/ContentDisplay';
import { useState } from 'react';

export default function App() {
  const [contentData, setContentData] = useState('');
  const [contentType, setContentType] = useState('Fact');

  return (
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    */
    <View style={styles.container}>
      <ContentDisplay content={contentData}/>
      <ControlPanel setContentType={setContentType} contentType={contentType}/>
      <GenerateButton setContentData={setContentData} contentType={contentType}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
