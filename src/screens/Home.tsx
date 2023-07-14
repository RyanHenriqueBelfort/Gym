import { ExerciseCard } from "@components/ExerciseCard";
import { Groups } from "@components/Groups";
import { HomeHeader } from "@components/HomeHeader";
import { HStack, VStack, FlatList, Heading, Text } from "native-base";
import { useState } from "react";
export function Home() {
  const [exercices, setExercices] = useState(["Puxada fronta", "Remada curvada", "Remada unilateral", "Levantamento terra"]);
  const [group, setGroup] = useState(["Costas", "Perna", "Biceps", "ombro"]);
  const [groupSelected, setGroupSelected] = useState("costas");

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
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercices.length}
          </Text>
        </HStack>
        <FlatList 
          data={exercices}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <ExerciseCard />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{paddingBottom: 20}}
        />
      </VStack>
    </VStack>
  );
}
