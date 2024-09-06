import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importando ícones

export default function CrecheEscolaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <FontAwesome name="building" size={50} color="#ffffff" />
          <Text style={styles.title}>PROGRAMA CRECHE - ESCOLA</Text>
        </View>
        <Text style={styles.body}>
          Objetiva dar suporte às mães estudantes, de cursos regulares e
          presenciais que residam com lhos de até 05 anos de idade e ou crianças sob a sua guarda, em situação de vulnerabilidade social, por meio da oferta de um auxílio nanceiro, para que a mãe estudante permaneça em seus estudos.
          {"\n\n"}
          a) Este auxílio será concedido mediante a comprovação da ausência de vaga em creche do seu município, mediante declaração da própria estudante atestando que o lho não está matriculado;
          {"\n\n"}
          b) Este auxílio nanceiro terá o valor equivalente ao auxílio Permanência II do Programa de Assistência e Apoio aos estudantes;
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
