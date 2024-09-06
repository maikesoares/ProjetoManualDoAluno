import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones

export default function ParticipacaoAEventosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="calendar" size={50} color="#ffffff" />
          <Text style={styles.title}>
            PROGRAMA DE INCENTIVO À PARTICIPAÇÃO EM EVENTOS E REUNIÕES DOS ÓRGÃOS COLEGIADOS DO IFNMG
          </Text>
        </View>
        <Text style={styles.body}>
          Visa oferecer auxílio nanceiro para ajuda de custo em viagens acadêmicas/escolares, para participação em eventos de natureza acadêmica/escolar, cientíca, tecnológica, desportiva, artística e cultural e participação em órgãos colegiados do IFNMG, no caso de representação discente.
          {'\n\n'}
          a) Este programa de incentivo para participação em eventos e nos órgãos colegiados do IFNMG terá normatização própria, assim como as ações relativas às visitas técnicas.
          {'\n\n'}
          b) O orçamento para execução deste programa, poderá ser de
          responsabilidade compartilhada entre as pró-reitorias ediretorias sistêmicas.
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
