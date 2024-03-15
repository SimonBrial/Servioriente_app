"use client";

import React, { useState, useId } from "react";
import {
  useMantineColorScheme,
  Container,
  Stack,
  Grid,
  Text,
} from "@mantine/core";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { SocialMedia } from "@/interface/interface";
import SocialMediaItem from "./SocialMediaItem";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { GeneralDivider } from "@/components/GeneralDivider";

export const SocialMediaContainer = () => {
  const id = useId();
  const [items, setItems] = useState<SocialMedia[]>([
    { title: "instagram", rating: 3, id: crypto.randomUUID() },
    { title: "facebook", rating: 3, id: crypto.randomUUID() },
    { title: "whatsapp", rating: 3, id: crypto.randomUUID() },
  ]);
  const { colorScheme } = useMantineColorScheme();

  const rows = items.map((item) => {
    const { rating, title, id } = item;
    return (
      <Stack key={id} gap={1}>
        <SocialMediaItem id={id} rating={rating} title={title} />
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
    );
  });

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!active.id !== over.id) {
      setItems((item) => {
        const oldIndex = item.findIndex((it) => it.id === active.id);
        const newIndex = item.findIndex((it) => it.id === over.id);
        return arrayMove(item, oldIndex, newIndex);
      });
    }
  };

  return (
    <Stack gap={2} p={0}>
      <TitleLayout color="" icon="" onText title="Redes Sociales" />
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
      <DndContext
        id={id}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={items}>
          <Container style={{ maxWidth: "100%", width: "100%", padding: "0" }}>
            {rows}
          </Container>
        </SortableContext>
      </DndContext>
    </Stack>
  );
};
