import { Text, View, StyleSheet } from 'react-native';

export default function HelloWord() {
  return (
    <View style={styles.container}>
      <Text>HOLA mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4,
    padding: 10,
    backgroundColor: "red", 
  },
});
