import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Welcome= () => {
  return (
    <>
      <Text style={styles.title}>Manual do Aluno</Text>
      <View style={styles.containerText}>
        <Image source= {require('../../app/assets/logo.png')}/>
        <Text style={styles.subtitle}>
          Bem-vindo(a)
        </Text>
        <Text style={styles.mensage}>
          Bem-vindo(a) ao Manual do Aluno. Aqui você encontra todas as informações nescessárias para sua jornada acadêmica. Explore nossas seções para saber mais sobre políticas acadêmicas, recursos disponíveis, dentre outros.
        </Text>
      </View>
    </>
  )
}

export {Welcome}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#182737',
  },

  containerText: {
    display: 'flex',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#182737',
  },

  mensage: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#182737',
  },

});
