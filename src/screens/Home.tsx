import { Groups } from '@components/Groups';
import { HomeHeader } from '@components/HomeHeader';
import { Center, VStack } from 'native-base';
export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Groups 
       name='Teste'
      />
    </VStack>
  )
  }
 
