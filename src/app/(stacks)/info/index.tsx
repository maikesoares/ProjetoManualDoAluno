import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function InfoGeraisScreen() {

  const handleNavigateMissaoEVisao = () => {
    router.push('/(stacks)/info/missaoEVisao');
  };

  const handleNavigateHistoria = () => {
    router.push('/(stacks)/info/historia');
  };

  const handleNavigateContatos = () => {
    router.push('/(stacks)/info/contatos');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.gridItem}
        onPress={handleNavigateMissaoEVisao}
        activeOpacity={0.7}
        accessibilityLabel="Missão e Visão da Instituição"
      >
        <FontAwesome name="star" size={24} color={styles.icon.color} />
        <Text style={styles.gridText}>Missão e Visão da Instituição</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.gridItem}
        onPress={handleNavigateHistoria}
        activeOpacity={0.7}
        accessibilityLabel="História da Instituição"
      >
        <FontAwesome name="book" size={24} color={styles.icon.color} />
        <Text style={styles.gridText}>História da Instituição</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.gridItem}
        onPress={handleNavigateContatos}
        activeOpacity={0.7}
        accessibilityLabel="Contatos Principais"
      >
        <FontAwesome name="phone" size={24} color={styles.icon.color} />
        <Text style={styles.gridText}>Contatos Principais</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({  
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f1f1f1', // Cor de fundo clara
  },

  gridItem: {
    backgroundColor: '#ffffff', // Branco
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  gridText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000', // Verde
  },

  icon: {
    color: '#004d40', // Verde
  },
});
