import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';
import { tintColorBackGround, tintColorBlack, tintColorGreenDark, tintColorWhite } from "../../constants/colors";

const CalendarAcademico = () => {

  const handleCalendarSuperior2024 = () => {
    router.push('/(stacks)/calendar2024/superior')
  }

  const handleCalendarTecnico2024 = () => {
    router.push('/(stacks)/calendar2024/tecnico')
  }

  const handleCalendarMedio2024 = () => {
    router.push('/(stacks)/calendar2024/medio')
  }

  const handleCalendarSuperior2025 = () => {
    router.push('/(stacks)/calendar2025/superior')
  }

  const handleCalendarTecnico2025 = () => {
    router.push('/(stacks)/calendar2025/tecnico')
  }

  const handleCalendarMedio2025 = () => {
    router.push('/(stacks)/calendar2025/medio')
  }

  return (
    <View style={styles.container}>
      <View style={styles.gridCalendar}>
        <Text style={styles.title}>CALENDÁRIO ACADÊMICO ANO LETIVO 2024 - PÓS- GREVE</Text>

        <TouchableOpacity style={styles.gridItem} onPress={handleCalendarSuperior2024}>
          <Icon name="calendar" size={24} color= {tintColorWhite} />
          <Text style={styles.gridText}>Ensino Superior</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={handleCalendarTecnico2024}>
          <Icon name="calendar" size={24} color= {tintColorWhite} />
          <Text style={styles.gridText}>Curso Técnico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={handleCalendarMedio2024}>
          <Icon name="calendar" size={24} color= {tintColorWhite} />
          <Text style={styles.gridText}>Ensino Médio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridCalendar}>
        <Text style={styles.title}>CALENDÁRIO ACADÊMICO ANO LETIVO 2025</Text>

        <TouchableOpacity style={styles.gridItem} onPress={handleCalendarSuperior2025}>
          <Icon name="calendar" size={24} color= {tintColorWhite} />
          <Text style={styles.gridText}>Ensino Superior</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={handleCalendarTecnico2025}>
          <Icon name="calendar" size={24} color= {tintColorWhite} />
          <Text style={styles.gridText}>Curso Técnico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={handleCalendarMedio2025}>
          <Icon name="calendar" size={24} color= {tintColorWhite} />
          <Text style={styles.gridText}>Ensino Médio</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { CalendarAcademico }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: tintColorBackGround,
  },

  gridCalendar: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: tintColorWhite,
    borderRadius: 10,
    marginBottom: 20,
  },

  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: tintColorBlack,
  },

  gridItem: {
    backgroundColor: tintColorGreenDark,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    minWidth: '100%',
    flexDirection: 'row',
    gap: 10,
  },

  gridText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: tintColorWhite,
  },
});
