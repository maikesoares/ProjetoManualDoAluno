import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; // Importando ícones

export default function MoradiaEstudantilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialIcons name="home" size={50} color="#ffffff" />
          <Text style={styles.title}>Programa de Moradia Estudantil</Text>
        </View>
        <Text style={styles.body}>
          Destinado aos estudantes de cursos presenciais em situação de vulnerabilidade social, oriundos da zona rural ou de outro município,
          diferente da sede do campus; este programa será executado nos campi que possuem moradia estudantil e terá regulamentação própria,
          respeitadas as diretrizes e princípios do regulamento.
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
