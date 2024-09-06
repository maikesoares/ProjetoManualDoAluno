import { router } from 'expo-router';
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { tintColorBackGround, tintColorBlack, tintColorGreenDark, tintColorWhite } from '../../../constants/colors';

type FontAwesomeIconName =
  | 'newspaper-o'
  | 'home'
  | 'users'
  | 'cutlery'
  | 'laptop'
  | 'building'
  | 'globe'
  | 'wheelchair'
  | 'heart'
  | 'heartbeat'
  | 'soccer-ball-o'
  | 'paint-brush'
  | 'refresh'
  | 'link'
  | 'flag'
  | 'calendar'
  | 'plus-square'
  | 'search'
  | 'weixin'
  | 'plane'
  ;

interface Service {
  name: string;
  label: string;
  icon: FontAwesomeIconName;
}

const services: Service[] = [
  { name: 'conceito', label: 'CONCEITO', icon: 'newspaper-o' },
  { name: 'moradiaEstudantil', label: 'MORADIA ESTUDANTIL', icon: 'home' },
  { name: 'apoioAoEstudante', label: 'ASSISTÊNCIA E APOIO AO ESTUDANTE', icon: 'users' },
  { name: 'segurancaAlimentar', label: 'SEGURANÇA ALIMENTAR', icon: 'cutlery' },
  { name: 'inclusaoDigital', label: 'INCLUSÃO DIGITAL', icon: 'laptop' },
  { name: 'crecheEscola', label: 'CRECHE - ESCOLA', icon: 'building' },
  { name: 'educacaoDiversidade', label: 'EDUCAÇÃO PARA A DIVERSIDADE', icon: 'globe' },
  { name: 'necessidadesEspecificas', label: 'APOIO A PESSOAS COM NECESSIDADES ESPECÍFICAS', icon: 'wheelchair' },
  { name: 'atencaoASaude', label: 'ATENÇÃO À SAÚDE', icon: 'heartbeat' },
  { name: 'apoioPsicologico', label: 'APOIO PSICOLÓGICO', icon: 'heart' },
  { name: 'acompanhamentoSocial', label: 'ACOMPANHAMENTO SOCIAL', icon: 'link' },
  { name: 'esporteELazer', label: 'INCENTIVO AO ESPORTE E LAZER', icon: 'soccer-ball-o' },
  { name: 'educacaoArtisticaECultural', label: 'INCENTIVO À EDUCAÇÃO ARTÍSTICA E CULTURAL', icon: 'paint-brush' },
  { name: 'programaRenovar', label: 'PROGRAMA RENOVAR', icon: 'refresh' },
  { name: 'integracaoDosEstudantes', label: 'INTEGRAÇÃO DOS ESTUDANTES INGRESSANTES', icon: 'weixin' },
  { name: 'incentivoACidadania', label: 'INCENTIVO À FORMAÇÃO DE CIDADANIA', icon: 'flag' },
  { name: 'participacaoAEventos', label: 'INCENTIVO À PARTICIPAÇÃO EM EVENTOS E REUNIÕES DOS ÓRGÃOS COLEGIADOS DO IFNMG', icon: 'calendar' },
  { name: 'auxilioEmergencial', label: 'AUXÍLIO EMERGENCIAL', icon: 'plus-square' },
  { name: 'mobilidadeAcademica', label: 'INCENTIVO À MOBILIDADE ACADÊMICA – PIMA', icon: 'plane' },
  { name: 'pesquisaEExtensao', label: 'INCENTIVO À PESQUISA E EXTENSÃO', icon: 'search' }
];

export default function ServicosScreen() {
  const handleNavigate = (path:string) => {
    router.push(`../(stacks)/servicos/${path}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Assistência Estudantil</Text>
      {services.map((service) => (
        <TouchableOpacity
          key={service.name}
          style={styles.gridItem}
          onPress={() => handleNavigate(service.name)}
          activeOpacity={0.7}
          accessibilityLabel={service.label}
        >
          <FontAwesome name={service.icon} size={24} color={styles.icon.color} />
          <Text style={styles.gridText}>{service.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: tintColorBackGround, 
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: tintColorGreenDark,
    marginBottom: 20,
    textAlign: 'center',
  },

  gridItem: {
    backgroundColor: tintColorWhite, 
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
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
