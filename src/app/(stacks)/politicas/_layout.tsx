import { Stack } from "expo-router";

export default function StackRoutesInformacoesGerais() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
        name="index"
        options={{
          title: 'Politicas'
        }}
      />

      </Stack>
    
  )
}