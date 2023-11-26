import { HStack, Text, Heading, VStack, Icon } from "native-base";
import { UserPhoto } from "./UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/useAuth";

import defaultUserPhotoImg from '@assets/userPhotoDefault.png'

export function HomeHeader() {
  const { user, signOut } = useAuth()

  return (
    <HStack bg="gray.600" pt={16} pb={15} px={8} alignItems="center">
      <UserPhoto
        source={user.avatar ? {uri: user.avatar} : defaultUserPhotoImg }
        alt="Imagem do usuario"
        size={16}
        marginRight={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Home
        </Text>
        <Heading color="gray.100" fontFamily="heading" fontSize="md">
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
