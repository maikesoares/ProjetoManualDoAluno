import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaAmarela } from "../../legendas/amarelo";
import { LegendaRoxa } from "../../legendas/roxo";
import { tintColorBackGround, tintColorBlack } from "../../../constants/colors";

type EventPeriod = {
  startingDay?: boolean;
  endingDay: boolean;
  color: string;
}

type EventData = {
  periods: EventPeriod[];
}

type MonthData = {
  events: Record<string, EventData>;
  legends: string[];
  initialDate: string;
};

const monthData: Record<string, MonthData> = {
  '2025-02': {
      events: {
        '2025-02-01': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2025-02-06': { periods: [ { endingDay: true, color: '#7108b8' }] },
        '2025-02-07': { periods: [ { endingDay: true, color: '#7108b8' }] },
        '2025-02-08': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2025-02-15': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2025-02-19': { periods: [ { endingDay: true, color: '#7108b8' }] },
        '2025-02-20': { periods: [ { endingDay: true, color: '#7108b8' }] },
        '2025-02-22': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '01 – Sábado letivo referente a quinta-feira',
        '06 e 07 - Semana do curso: Sistemas de Informação - SEINFO',
        '08 – Sábado letivo referente a sexta-feira',
        '15 – Sábado letivo referente a segunda-feira',
        '19 e 20 - Semana do curso: Administração - SEMAD',
        '22 – Sábado letivo referente a terça-feira',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2025-02-01'
    },
}

const CalendarFevereiro: React.FC = () => {
  return (
    <View>
      {Object.keys(monthData).map((monthKey) => {
        const { events, legends, initialDate } = monthData[monthKey];

        return (
          <View key={monthKey}>
            <Calendar
              hideArrows={true}
              hideExtraDays={true}
              initialDate={initialDate}
              markingType={'multi-period'}
              markedDates={events}
              theme={{
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#000000',
                dayTextColor: '#2d4150',
                monthTextColor: '#000000',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                arrowColor: 'black',
              }}
            />
            <View style={styles.eventosContainer}>
              {legends.map((legend:string, index:number) => (
                <Text style={styles.eventos} key={index}>
                  {legend}
                </Text>
              ))}

              <LegendaAmarela />
              <LegendaRoxa />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarFevereiro}

const styles = StyleSheet.create({

  eventosContainer: {
    marginBottom: 10,
    padding: 10,
    borderColor: tintColorBlack,
    backgroundColor: tintColorBackGround,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  eventos: {
    fontSize: 14,
    fontWeight: 'bold',
    borderBottomColor: 'red',
  },
});