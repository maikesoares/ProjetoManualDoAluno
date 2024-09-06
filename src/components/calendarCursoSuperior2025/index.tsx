import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CalendarJaneiro } from '../calendar/calendarSuperior2025/janeiro';
import { CalendarFevereiro } from '../calendar/calendarSuperior2025/fevereiro';
import { CalendarMarco } from '../calendar/calendarSuperior2025/marco';
import { CalendarAbril } from '../calendar/calendarSuperior2025/abril';
import { CalendarMaio } from '../calendar/calendarSuperior2025/maio';

const CalendarCursoSuperior2025= () => {

  return (
    <ScrollView style={styles.container}>
      <CalendarJaneiro />
      <CalendarFevereiro />
      <CalendarMarco />
      <CalendarAbril />
      <CalendarMaio />
    </ScrollView>
  )
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    backgroundColor: '#295c0d',
    padding: 10,
  },
});


export { CalendarCursoSuperior2025 }