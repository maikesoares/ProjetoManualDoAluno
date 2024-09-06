import { router } from 'expo-router';
import { MenuItem } from '../types/types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    title: 'Informações Gerais',
    subItems: [
      { id: '1-1',
        title: 'Missão e visão da Instituição', 
        onPress: () => router.push('/(stacks)/info/missaoEVisao') },

      { id: '1-2', 
        title: 'História da Instituição',
        onPress: () => router.push('/(stacks)/info/historia')
       },
      { id: '1-3', 
        title: 'Contatos Principais',
        onPress: () => router.push('/(stacks)/info/contatos')
      },
    ],
  },
  {
    id: '2',
    title: 'Políticas Acadêmicas',
    subItems: [
      { id: '2-1', title: 'Regras de Matrícula' },
      { id: '2-2', title: 'Frequência' },
    ],
  },
  {
    id: '3',
    title: 'Recursos Acadêmicos',
    subItems: [
      { id: '3-1', title: 'Biblioteca' },
      { id: '3-2', title: 'Laboratórios' },
      { id: '3-3', 
        title: 'Serviços de Apoio ao Estudante',
        onPress: () => router.push('/(stacks)/servicos') 
      },
    ],
  },
  {
    id: '4',
    title: 'Calendário Acadêmico',
    subItems: [
      { id: '4-1', title: 'Ensino Superior - 2024', onPress: () => router.push('/(stacks)/calendar2024/superior') },
      { id: '4-2', title: 'Ensino Médio - 2024', onPress: () => router.push('/(stacks)/calendar2024/medio') },
      { id: '4-3', title: 'Curso Técnico - 2024', onPress: () => router.push('/(stacks)/calendar2024/tecnico') },
      { id: '4-4', title: 'Ensino Superior - 2025', onPress: () => router.push('/(stacks)/calendar2025/superior') },
      { id: '4-5', title: 'Ensino Médio - 2025', onPress: () => router.push('/(stacks)/calendar2025/medio') },
      { id: '4-6', title: 'Curso Técnico - 2025', onPress: () => router.push('/(stacks)/calendar2025/tecnico') },
    ],
  },
];
