import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Prueba from './components/Prueba';
import Mangas from './jsons/Imagenes.json'
import HelloWord from './components/HelloWord';
import MyProfile from './components/Myprofile';
import Buttons_a from './components/Buttons_a'

export default function App() {

  const data = [ Mangas];

  return (
    <View style={styles.container}>
      <HelloWord/>
      <MyProfile/>
     <Buttons_a/>
      <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => <Prueba nombre={item.nombre} />} />
      <StatusBar style="auto" />
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
