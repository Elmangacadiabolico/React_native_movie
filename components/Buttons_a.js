import { Text, View, StyleSheet, Button, Alert, Pressable } from "react-native";

export default function HelloWord() {
  const Press = () => {
    Alert.alert("HAAA me presionaste");
  };

  const PressCustom = () => {
    Alert.alert("🔥Soy el boton fachero🔥");
  };

  return (
    <View style={styles.container}>

      <Button title="Presioname" onPress={Press} />


      <Pressable style={styles.pressable} onPress={PressCustom}>
        <Text style={styles.pressableText}>Soy un Pressable Cheto</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  pressable: {
    marginTop: 20,
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "transparent",
    // borde multicolor simulando un gradiente
    shadowColor: "red",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  pressableText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
