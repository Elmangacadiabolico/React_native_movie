import { Text, View, StyleSheet, Button, Alert } from 'react-native';

export default function HelloWord() {
  const Press = () => {
    Alert.alert[("HAAA me Precionaste")];
  };

  return (
    <> 
    <View style={styles.container}>
      <Button title="Presionme" onPress={Press} />
      text
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
    justifyContent: "center",
  },
});
