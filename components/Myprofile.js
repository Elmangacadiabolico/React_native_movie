import { Text, View, StyleSheet, Image } from 'react-native';

export default function MyProfile() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} 
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Leandro</Text>
        <Text style={styles.description}>Soy un fullsack pero me gusta mas el backend que el frontend. Estoy en la escuela ProA de 6to año </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, 
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});

{/* actividades 2 y 3 */}