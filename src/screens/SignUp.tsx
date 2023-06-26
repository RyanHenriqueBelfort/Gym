import { VStack, Image, Center, Text, Heading, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackGroundImage from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <VStack flex={1} bg={"gray.700"} px={10} pb={16}>
        <Image
          source={BackGroundImage}
          alt="Pessoas Treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine seu corpo e sua mente
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input
            placeholder="Nome"
          />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Criar e acessar" />
        </Center>
          <Button title="Voltar para o login" variant="outline" mt={24} />
      </VStack>
    </ScrollView>
  );
}
