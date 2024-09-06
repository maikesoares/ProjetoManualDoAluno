import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; // Importando ícones

export default function ApoioPsicologicoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome5 name="brain" size={50} color="#ffffff" />
          <Text style={styles.title}>PROGRAMA DE APOIO PSICOLÓGICO</Text>
        </View>
        <Text style={styles.body}>
          Esse programa tem como objetivo promover o bem-estar biopsicossocial dos estudantes e a preservação da saúde mental, por meio de ações de natureza preventiva e interventiva, que respeitem a ética e os direitos humanos e
          priorizem a multidisciplinaridade, além do acompanhamento dos discentes e realização de encaminhamentos quando necessário, aos demais Programas da Assistência Estudantil do IFNMG, bem como para outras políticas públicas municipais/estaduais/federais.
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
