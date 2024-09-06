import { Tabs } from "expo-router";
import { MaterialIcons} from '@expo/vector-icons'

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false}}>
      <Tabs.Screen 
        name="calendar" 
        options={{
          title: "Calendário",
          tabBarIcon: ({size, color}) => <MaterialIcons name="calendar-today" size={size} color={color} />,
          tabBarActiveTintColor: '#004d40',
          tabBarInactiveTintColor: 'grey',
        }}
      />

      <Tabs.Screen 
        name="index" 
        options={{
          title: "Home",
          tabBarIcon: ({color}) => <MaterialIcons name="home" size={32} color={color} />,
          tabBarActiveTintColor: '#004d40',
          tabBarInactiveTintColor: 'grey',
        }}
      />

      <Tabs.Screen 
        name="politics" 
        options={{
          title: "Politicas",
          tabBarIcon: ({size, color}) => <MaterialIcons name="support" size={size} color={color} />,
          tabBarActiveTintColor: '#004d40',
          tabBarInactiveTintColor: 'grey',
        }}
      />
    </Tabs>
  )
}