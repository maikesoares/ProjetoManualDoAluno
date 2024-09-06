import { View, Text, StyleSheet } from "react-native";

export default function PoliticsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Politicas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 44,
    fontWeight: 'bold',
  },
});
