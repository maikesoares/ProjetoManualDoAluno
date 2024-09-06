import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ConceitoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ASSISTÊNCIA ESTUDANTIL</Text>
        <Text style={styles.subtitle}>O que é isso?</Text>
      </View>

      <View style={styles.iconsRow}>
        <MaterialIcons name="school" size={24} color="black" />
        <MaterialIcons name="local-hospital" size={24} color="black" />
        <MaterialIcons name="restaurant" size={24} color="black" />
        <MaterialIcons name="directions-bus" size={24} color="black" />
        <MaterialIcons name="sports-soccer" size={24} color="black" />
        <MaterialIcons name="work" size={24} color="black" />
        <MaterialIcons name="handshake" size={24} color="black" />
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>
          A Assistência Estudantil executada no âmbito do IFNMG, que foi
          construída com fundamento na Política Nacional de Assistência
          Estudantil – PNAES aprovada pelo Decreto 7.234/2010 e com princípios
          pautados em valores éticos e humanos, compreende programas, serviços,
          projetos e ações. O objetivo da Assistência Estudantil é favorecer e
          ampliar a permanência e o êxito na vida escolar/acadêmica dos
          discentes matriculados nos cursos regularmente ofertados pelo IFNMG,
          nos diversos campi, nas perspectivas de educação profissional, técnica
          e básica, nos níveis médio, superior e de formação inicial e continuada
          da classe trabalhadora.
        </Text>
      </View>

      <View style={styles.footer}>
        <Image
          source={require('../../../assets/logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.footerText}>
          Diretoria de Assuntos Estudantis e Comunitários
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#004d40',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  content: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ConceitoScreen;
