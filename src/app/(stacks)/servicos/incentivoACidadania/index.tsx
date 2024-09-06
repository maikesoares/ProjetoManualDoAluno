import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones

export default function IncentivoACidadaniaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="flag" size={50} color="#ffffff" />
          <Text style={styles.title}>PROGRAMA DE INCENTIVO À FORMAÇÃO DE CIDADANIA</Text>
        </View>
        <Text style={styles.body}>
          Este programa visa incentivar o estudante, para que se integre ao contexto institucional, contribuindo para a sua formação integral cidadã e estimulando sua participação política e o protagonismo nas organizações estudantis,
          além de criar espaços para discussões e reexões sobre temas interdisciplinares com a educação e juventude, estimulando a organização dos espaços de representação estudantil e
          acadêmica.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f1f1f1', // Cor de fundo suave
  },
  card: {
    backgroundColor: '#ffffff', // Fundo branco para o cartão
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 5, // Sombra para destacar o cartão
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Offset da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 6, // Raio da sombra
    overflow: 'hidden', // Garante que a sombra não ultrapasse os limites do cartão
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#004d40', // Cor de fundo para o cabeçalho
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // Cor branca para o título
    marginLeft: 8,
  },
  body: {
    fontSize: 16,
    color: '#424242', // Cor do texto
    lineHeight: 24,
    textAlign: 'justify', // Justifica o texto
  },
});
