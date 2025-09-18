import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import MyProfile from './components/Myprofile';

function AppContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <StatusBar barStyle="dark-content" />
      <MyProfile />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
});
