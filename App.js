import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldApp from './components/HelloWorld';
import ControlPanel from './components/ControlPanel';
import GenerateButton from './components/GenerateButton';
import ContentDisplay from './components/ContentDisplay';

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    */
    <View style={styles.container}>
      <ContentDisplay/>
      <ControlPanel/>
      <GenerateButton/>
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
