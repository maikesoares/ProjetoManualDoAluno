import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
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
      <>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigateBiblioteca}
          activeOpacity={0.7}
          accessibilityLabel="Biblioteca"
        >
          <FontAwesome5 name="book" size={24} color={styles.icon.color} />
          <Text style={styles.gridText}>Biblioteca</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigateLaboratorio}
          activeOpacity={0.7}
          accessibilityLabel="Laboratórios"
        >
          <FontAwesome5 name="desktop" size={24} color={styles.icon.color} />
          <Text style={styles.gridText}>Laboratórios</Text>
        </TouchableOpacity>
      </>
    );
  };

  export {Recursos}
  
  const styles = StyleSheet.create({  
    gridItem: {
      backgroundColor: tintColorWhite, 
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      marginBottom: 20,
      width: '80%',
      shadowColor: tintColorBlack,
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
      color: tintColorBlack, 
    },
  
    icon: {
      color: tintColorGreenDark,
    },
  });
