import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones

export default function ProgramaRenovarScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="refresh" size={50} color="#ffffff" />
          <Text style={styles.title}>PROGRAMA RENOVAR</Text>
        </View>
        <Text style={styles.body}>
          Visa a redução do índice de reprovações nos diversos cursos doIFNMG, por meio de ações que perpassam o mundo da aprendizagem; acompanhamento psicossocial e pedagógico aos estudantes com histórico de reprovação e/ou com diculdade de
          aprendizagem, promovendo um espaço para reetir criticamente sua trajetória na vida escolar/acadêmica, tendo, como ação estratégica, o planejamento de estudo,trabalhando com a tríplice dimensão: aprender, estudar e pesquisar, propiciando condições para o domínio de métodos e técnicas de planejamento, leitura analítica, documentação e elaboração de trabalho acadêmico, desenvolvido de forma articulada com o Ensino.
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
