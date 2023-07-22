import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { Groups } from "@components/Groups";
import { HomeHeader } from "@components/HomeHeader";
import { HStack, VStack, FlatList, Heading, Text } from "native-base";
import { useState } from "react";
import { AppNavigationRoutesProp } from "@routes/app.routes";

export function Home() {
  const [exercices, setExercices] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
  ]);
  const [group, setGroup] = useState(["Costas", "Perna", "Biceps", "ombro"]);
  const [groupSelected, setGroupSelected] = useState("costas");

  const navigation = useNavigation<AppNavigationRoutesProp>();

  function handleOpenExerciceDetail() {
    navigation.navigate("Exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={group}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Groups
            name={item}
            isActive={groupSelected.toUpperCase() === item.toUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontFamily='heading' fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercices.length}
          </Text>
        </HStack>
        <FlatList
          data={exercices}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard
              image="https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg"
              exercise="Remada unilateral"
              onPress={handleOpenExerciceDetail}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
