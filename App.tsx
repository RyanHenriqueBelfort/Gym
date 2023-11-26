import { StatusBar } from 'react-native';

import { NativeBaseProvider } from 'native-base'

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';

import { THEME } from './src/theme/index' 
import { Routes } from '@routes/index';

import { AuthContextProvider } from '@contexts/AuthContext';

export default function App() {

  const fontsLoaded = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor='transparent' translucent barStyle={'light-content'}/>
      <AuthContextProvider>
        {fontsLoaded ? 
          <Routes />
          : 
          <Loading />
        }
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}

