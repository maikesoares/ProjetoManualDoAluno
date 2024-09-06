import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { tintColorBlack, tintColorWhite } from "../../constants/colors";

const GridItems: React.FC = () => {

  const handleNavigateCalendario = () => {
    router.push('/(tabs)/menu/calendar');
  };

  const handleNavigateInfo = () => {
    router.push('/(stacks)/info');
  };

  const handleNavigatePoliticas = () => {
    router.push('/(tabs)/menu/politics');
  };

  const handleNavigateRecursos = () => {
    router.push('/(stacks)/recursos');
  };

  const handleNavigateServicos = () => {
    router.push('/(stacks)/servicos');
  };

 return (
  <ScrollView contentContainerStyle={styles.gridContainer}>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigateInfo}
          accessibilityLabel="Informações"
          accessibilityHint="Pressione para acessar informações gerais."
        >
          <Icon name="cogs" size={50} color= {tintColorBlack} />
          <Text style={styles.gridText}>Informações...</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigatePoliticas}
          accessibilityLabel="Políticas"
          accessibilityHint="Pressione para acessar políticas acadêmicas."
        >
          <Icon name="graduation-cap" size={50} color= {tintColorBlack} />
          <Text style={styles.gridText}>Políticas...</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigateRecursos}
          accessibilityLabel="Recursos"
          accessibilityHint="Pressione para acessar recursos acadêmicos."
        >
          <Icon name="university" size={50} color= {tintColorBlack} />
          <Text style={styles.gridText}>Recursos...</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigateCalendario}
          accessibilityLabel="Calendário"
          accessibilityHint="Pressione para acessar o calendário acadêmico."
        >
          <Icon name="calendar-check-o" size={50} color= {tintColorBlack} />
          <Text style={styles.gridText}>Calendário...</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigateServicos}
          accessibilityLabel="Serviços de Apoio"
          accessibilityHint="Pressione para acessar serviços de apoio."
        >
          <Icon name="handshake-o" size={50} color= {tintColorBlack} />
          <Text style={styles.gridText}>Serviços de Apoio...</Text>
        </TouchableOpacity>
      </ScrollView>
 )
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  gridItem: {
    backgroundColor: tintColorWhite,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: '48%',
  },

  gridText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: tintColorBlack,
  },
})

export default GridItems;