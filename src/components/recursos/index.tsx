import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { tintColorBlack, tintColorGreenDark, tintColorWhite } from '../../constants/colors';
import { router } from 'expo-router';

const Recursos = () => {

  const handleNavigateBiblioteca = () => {
    router.push('/(stacks)/recursos/biblioteca');
  };

  const handleNavigateLaboratorio = () => {
    router.push('/(stacks)/recursos/laboratorio');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.gridItem}
        onPress={handleNavigateBiblioteca}
        activeOpacity={0.7}
        accessibilityLabel="Biblioteca"
      >
        <FontAwesome5 name="book" size={32} color={styles.icon.color} />
        <Text style={styles.gridText}>Biblioteca</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.gridItem}
        onPress={handleNavigateLaboratorio}
        activeOpacity={0.7}
        accessibilityLabel="Laboratórios"
      >
        <FontAwesome5 name="desktop" size={32} color={styles.icon.color} />
        <Text style={styles.gridText}>Laboratórios</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Recursos };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    backgroundColor: tintColorWhite,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: tintColorGreenDark,
  },
  gridText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: tintColorBlack,
  },
  icon: {
    color: tintColorGreenDark,
  },
});
