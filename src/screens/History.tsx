import { useState } from "react";
import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, VStack, SectionList } from "native-base";
export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "14.07.23",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "15.07.23",
      data: ["Puxada frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontFamily='heading' fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
