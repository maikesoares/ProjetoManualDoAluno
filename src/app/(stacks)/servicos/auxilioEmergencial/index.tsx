import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones

export default function AuxilioEmergencialScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="plus-square" size={50} color="#ffffff" />
          <Text style={styles.title}>
            PROGRAMA DE AUXÍLIO EMERGENCIAL
          </Text>
        </View>
        <Text style={styles.body}>
          Poderá ser concedido auxílio emergencial, no valor equivalente ao Auxílio I, II ou III, a estudantes que, momentaneamente, necessitem de apoio nanceiro para conseguir continuar suas atividades escolares/acadêmicas.
          {'\n\n'}
          a) Esse auxílio se aplica em caso de perda momentânea da principal renda familiar por desemprego, ou por morte do provedor, bem como por envolvimento da família em alguma calamidade pública, ou outras vicissitudes a serem avaliadas pelo(a) Assistente Social, e que possam implicar negativamente nas condições de permanência escolar do discente.
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
