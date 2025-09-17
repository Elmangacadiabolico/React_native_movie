import { Text, View, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Hola, soy un texto</Text>
      <StatusBar style="light" />


      {/* <StatusBar style="dark" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", 
    justifyContent: "center",
    alignItems: "center",
  },
});
