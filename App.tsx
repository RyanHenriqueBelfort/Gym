import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider } from 'native-base'


import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const fontsLoaded = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor='transparent' translucent barStyle={'light-content'}/>
      {fontsLoaded ? 
        <Text>Open up App.tsx to start working on your app!</Text>
        : 
        ''
      }
    </NativeBaseProvider>
  );
}

