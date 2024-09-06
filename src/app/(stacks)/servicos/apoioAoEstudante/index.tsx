import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; // Importando ícones

export default function ApoioAoEstudanteScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialIcons name="groups" size={50} color="#ffffff" />
          <Text style={styles.title}>PROGRAMA DE ASSISTÊNCIA E APOIO AO ESTUDANTE</Text>
        </View>
        <View>
          <Text style={styles.bodyText}>
            Destinado aos discentes de cursos presenciais, visa desenvolver
            ações de oferta de auxílios financeiros e acompanhamento aos
            estudantes em situação de vulnerabilidade social, contribuindo
            para que os beneficiários tenham condições de suprir
            necessidades básicas, como alimentação, itens escolares dentre
            outras, possuindo três tipos de auxílios financeiros:
          </Text>
          <Text style={styles.bodyText}>
            a) Permanência I: será concedido aos discentes em situação socioeconômica considerada insuficiente para sua manutenção no IFNMG.
          </Text>
          <Text style={styles.bodyText}>
            b) Permanência II: será concedido aos discentes em situação socioeconômica considerada parcialmente insuficiente para sua manutenção no IFNMG.
          </Text>
          <Text style={styles.bodyText}>
            c) Permanência III: será concedido aos discentes em nível socioeconômico considerado razoável para a manutenção do estudante na instituição.
          </Text>
        </View>
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
    
    bodyText: {
      fontSize: 16,
      color: '#333333', // Cor do texto um pouco mais escura
      lineHeight: 24,
      textAlign: 'justify', // Justifica o texto
      marginBottom: 12, // Adiciona espaçamento entre os parágrafos
    },
});
