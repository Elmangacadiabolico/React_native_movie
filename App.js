import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SiteSafe from './components/SiteSafe';


export default function App() {
  return (
    <View style={styles.container}>
      <SiteSafe/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
  },
});
