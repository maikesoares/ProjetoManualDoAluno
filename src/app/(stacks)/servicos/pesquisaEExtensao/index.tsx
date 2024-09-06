import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones

export default function PesquisaEExtensaoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="search" size={50} color="#ffffff" />
          <Text style={styles.title}>
            PROGRAMA DE INCENTIVO A PESQUISA E EXTENSÃO
          </Text>
        </View>
        <Text style={styles.body}>
        Atividades de pesquisa e extensão poderão ser incentivadas, por meio do fomento de ações das áreas supracitadas priorizando o atendimento de estudantes beneciários das ações armativas do IFNMG.
        {'\n\n'}
        São objetivos do programa:
        {'\n\n'}
        I. Possibilitar a concessão de Bolsas de Iniciação Cientíca, de Iniciação tecnológica e bolsas de Extensão a alunos devidamente
        matriculados nesta instituição, visando o incentivo aos estudos, à pesquisa e a extensão;
        {'\n\n'}
        II. Incentivar a participação dos alunos em atividades que possibilitem a complementação da aprendizagem, através do engajamento em Projetos de Incentivo à pesquisa e a extensão;
        {'\n\n'}
        III. Proporcionar ao aluno bolsista, atividades que possibilitem o seu crescimento pessoal e prossional e envolvimento com a comunidade estimulando o desenvolvimento de competências e habilidades voltadas para o mundo do trabalho, da pesquisa e da extensão;
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
