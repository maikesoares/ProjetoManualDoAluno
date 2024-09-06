import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function SegurancaAlimentarScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="cutlery" size={40} color="#ffffff" style={styles.icon} />
          <Text style={styles.title}>PROGRAMA DE SEGURANÇA ALIMENTAR</Text>
        </View>
        <Text style={styles.body}>
          Consiste no desenvolvimento de ações e serviços para implementação
          e fortalecimento da prática de Educação Alimentar e Nutricional com
          intuito de promover a segurança alimentar para a comunidade
          discente, priorizando a oferta do auxílio “in natura”, isto é a oferta de
          refeições para os discentes, principalmente para os estudantes dos
          cursos de nível médio na modalidade integrada; de acordo a sua
          realidade, os campi do IFNMG poderão desenvolver este programa por
          meio das ações descritas nos itens a, b, e c abaixo, de forma isolada ou
          cumulativamente.
          {"\n\n"}
          a) Auxílio financeiro para o discente EaD
          De acordo os critérios do art. 5º, este auxílio poderá ser ofertado aos
          estudantes em situação de vulnerabilidade social dos cursos da
          Educação a Distância, nas atividades presenciais do curso, com
          matrícula e frequência regular, para atender as necessidades de
          alimentação e/ou transporte.
          {"\n\n"}
          b) Restaurante Estudantil
          Tem o objetivo de fortalecer a política de permanência do educando e
          contribuir na sua formação, por meio da oferta de refeições
          balanceadas e de qualidade, a baixo custo ou gratuitamente,
          destinadas aos estudantes regularmente matriculados, conforme
          termo de referência e dotação orçamentária dos campi.
          {"\n\n"}
          c) Acompanhamento nutricional dos discentes
          Promover ações de educação alimentar voltadas à segurança
          nutricional dos discentes, estimulando novas práticas e hábitos
          alimentares saudáveis; essa ação é dependente da presença, no
          campus, do profissional da área de Nutrição.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f1f1f1',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#004d40',
    borderRadius: 12,
  },
  icon: {
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  body: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 24,
    textAlign: 'justify',
  },
});
