"use client";

import {
  useMantineColorScheme,
  Container,
  Stack,
  Grid,
  Text,
} from "@mantine/core";
import { SocialMedia } from "@/interface/interface";
import SocialMediaItem from "./SocialMediaItem";
import { GeneralDivider } from "@/components/GeneralDivider";
import {
  KeyboardSensor,
  PointerSensor,
  useSensors,
  DndContext,
  useSensor,
} from "@dnd-kit/core";
import {
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  SortableContext,
  arrayMove,
} from "@dnd-kit/sortable";
import { useId, useState } from "react";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { useDashboardStore } from "@/store/dashboard-store";

export const SocialMediaContainer = () => {
  const { SocialMediaRedConversations } = useDashboardStore();

  const idDnD = useId();
  const { colorScheme } = useMantineColorScheme();
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>(SocialMediaRedConversations);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!active.id !== over.id) {
      setSocialMedia((socialMedia) => {
        const oldIndex = socialMedia.findIndex((p) => p.id === active.id);
        const newIndex = socialMedia.findIndex((p) => p.id === over.id);
        return arrayMove(socialMedia, oldIndex, newIndex);
      });
    }
  };

  const rows = socialMedia.map((item) => {
    const { rating, title, id } = item;
    return (
      <Stack key={id} gap={1}>
        <SocialMediaItem id={id} rating={rating} title={title} />
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
    );
  });

  return (
    <Stack gap={2} p={0}>
      <TitleSimpleLayout title="Redes Sociales" />
      <Stack gap={1}>
        <Grid gutter="xs" style={{ width: "100%" }}>
          <Grid.Col span={4}></Grid.Col>
          <Grid.Col span={4}>
            <Text
              styles={(theme) => ({
                root: {
                  textAlign: "center",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                  cursor: "default",
                },
              })}
            >
              Red Social
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Text
              styles={(theme) => ({
                root: {
                  textAlign: "end",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                  cursor: "default",
                  paddingRight: "0.4rem",
                },
              })}
            >
              Rating
            </Text>
          </Grid.Col>
        </Grid>
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
      <Container style={{ maxWidth: "100%", width: "100%", padding: "0" }}>
        <DndContext
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          id={idDnD}
        >
          <SortableContext
            strategy={verticalListSortingStrategy}
            items={socialMedia}
          >
            {rows}
          </SortableContext>
        </DndContext>
      </Container>
    </Stack>
  );
};
