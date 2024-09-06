import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function MissaoEVisaoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <View style={styles.gridIcon}>
          <Icon name="rocket" size={30} color="#006400" style={styles.icon} />
        <Text style={styles.title}>Missão</Text>
        </View>
        <Text style={styles.subTitle}>
          A missão do Instituto Federal do Norte de Minas Gerais (IFNMG) é oferecer ensino, pesquisa e extensão de qualidade, com foco na formação cidadã e no desenvolvimento regional.
        </Text>
      </View>
      
      <View style={styles.section}>
        <View style={styles.gridIcon}>
          <Icon name="globe" size={30} color="#006400" style={styles.icon} />
          <Text style={styles.title}>Visão</Text>
        </View>
        <Text style={styles.subTitle}>
          A visão do IFNMG é ser reconhecido como uma instituição educacional inovadora e sustentável, socialmente inclusiva e articulada com as demandas da sociedade.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f1f1f1', 
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#ffffff', 
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  gridIcon: {
    flexDirection: 'row',
    gap: 10
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006400', 
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#333333', 
    lineHeight: 24,
  },
  icon: {
    marginBottom: 10,
  },
});
