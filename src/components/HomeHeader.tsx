import { HStack, Text, Heading, VStack, Icon } from "native-base";
import { UserPhoto } from "./UserPhoto";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={15} px={8} alignItems="center">
        <UserPhoto 
            source={{ uri: "http://github.com/RyanHenriqueBelfort.png"}}
            alt="Imagem do usuario"
            size={16}
            marginRight={4}
        />
      <VStack flex={1}>
        <Text color="gray.100" fontSize='md'>Home</Text>
        <Heading color="gray.100" fontSize='md'>Ryan</Heading>
      </VStack>

      <TouchableOpacity>
        <Icon 
            as={MaterialIcons}
            name="logout"
            color='gray.200'
            size={7}
        />
      </TouchableOpacity>
    </HStack>
  );
}
