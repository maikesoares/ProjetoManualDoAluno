import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones

export default function EducacaoArtisticaECulturalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="paint-brush" size={50} color="#ffffff" />
          <Text style={styles.title}>PROGRAMA DE INCENTIVO À EDUCAÇÃO ARTÍSTICA E CULTURAL</Text>
        </View>
        <Text style={styles.body}>
          Visa oferecer uma formação ampliada, de modo a incentivar o desenvolvimento da criatividade e do olhar analítico, promovendo a prática da sensibilidade, o aprimoramento do  acadêmico e produção do conhecimento, proporcionando, aos estudantes o acesso a bens e serviços culturais que estejam em consonância com as propostas dos componentes curriculares dos cursos, podendo se efetivar por meio do nanciamento de projetos, relacionados a sua nalidade, de servidores e discentes, via chamadas públicas.
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
