import { View, StyleSheet } from "react-native";
import { Recursos } from "../../../components/recursos";

export default function RecursosScreen() {
  return (
    <View style={styles.container}>
      <Recursos />
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
