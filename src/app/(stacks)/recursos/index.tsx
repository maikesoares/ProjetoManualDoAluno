import React from 'react'
import { View, StyleSheet } from 'react-native'
import { tintColorBackGround } from '../../../constants/colors';
import { Recursos } from '../../../components/recursos';

export default function RecursosScreen() {
    return (
      <View style={styles.container}>
        <Recursos />
      </View>
    );
  };
  
  const styles = StyleSheet.create({  
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: tintColorBackGround, 
    },
  });
