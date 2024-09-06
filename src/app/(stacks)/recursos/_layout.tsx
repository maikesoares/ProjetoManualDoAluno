import { Stack } from "expo-router";

export default function StackRoutesRecursos() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: 'Recursos'
        }}
      />

      </Stack>
    
  )
}