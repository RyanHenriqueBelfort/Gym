import { Entypo } from "@expo/vector-icons"
import { HStack, Heading, Image, VStack, Icon, Text } from "native-base"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
    exercise: string
    image: string
}

export function ExerciseCard({ image, exercise ,...rest}: Props) {
    return(
        <TouchableOpacity {...rest}>
            <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md' mb={3}>
                <Image 
                    source={{uri: image}}
                    alt="Imagem do exercicio"
                    w={16}
                    h={16}
                    rounded='md'
                    mr={4}
                    resizeMode='cover'
                />
                <VStack flex={1}>
                    <Heading fontSize='lg' color='white' fontFamily='heading'>
                        {exercise}
                    </Heading>

                    <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>
                        3 séries x 12 repetições
                    </Text>
                </VStack>

                <Icon as={Entypo} name="chevron-thin-right" color='gray.300'/>
            </HStack>
        </TouchableOpacity>
    )
}