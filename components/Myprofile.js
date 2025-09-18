import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function MyProfile() {
  const [followers, setFollowers] = useState(0);
  const [likes, setLikes] = useState(0);

  const handleFollow = () => {
    const newFollowers = followers + 1;
    setFollowers(newFollowers);
    console.log(`${newFollowers} seguidores`);
  };

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    console.log(`${newLikes} me gusta`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <ScrollView>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleFollow} style={[styles.button, styles.followButton]}>
            <Text style={styles.buttonText}>Seguir ({followers})</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLike} style={[styles.button, styles.likeButton]}>
            <Text style={styles.buttonText}>Me Gusta ({likes})</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followButton: {
    backgroundColor: '#4267B2',
  },
  likeButton: {
    backgroundColor: '#1DA1F2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});