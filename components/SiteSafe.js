import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Prueba from './Prueba';
import HelloWord from './HelloWord';
import MyProfile from './Myprofile';
import Buttons_a from './Buttons_a';
import Card_game from './Card_game';

function Content() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,}}
    >
      <ScrollView contentContainerStyle={styles.container}>
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

export default function SiteSafe() {
  return (
    <SafeAreaProvider>
      <Content />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
