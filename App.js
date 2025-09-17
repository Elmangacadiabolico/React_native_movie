import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Prueba from './components/Prueba';
import HelloWord from './components/HelloWord';
import MyProfile from './components/Myprofile';
import Buttons_a from './components/Buttons_a';
import Card_game from './components/Card_game';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Prueba />
        <HelloWord />
        <MyProfile />
        <Buttons_a />
        <Card_game />
        <StatusBar style="auto" />
      </ScrollView>
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
