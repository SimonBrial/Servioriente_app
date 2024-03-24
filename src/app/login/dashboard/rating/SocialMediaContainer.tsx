"use client";

import React, { RefObject } from "react";
import {
  useMantineColorScheme,
  Container,
  Stack,
  Grid,
  Text,
} from "@mantine/core";
import { SocialMedia } from "@/interface/interface";
import SocialMediaItem from "./SocialMediaItem";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { GeneralDivider } from "@/components/GeneralDivider";
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

const SocialMediaRed: SocialMedia[] = [
  { title: "instagram", rating: 3, id: crypto.randomUUID() },
  { title: "facebook", rating: 3, id: crypto.randomUUID() },
  { title: "whatsapp", rating: 3, id: crypto.randomUUID() },
];

export const SocialMediaContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const [parent, items] = useDragAndDrop<HTMLUListElement, SocialMedia>(
    SocialMediaRed,
    {
      plugins: [animations()],
      dragHandle: ".handler",
    },
  );

  const rows = items.map((item) => {
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
      <Container
        style={{ maxWidth: "100%", width: "100%", padding: "0" }}
        ref={parent as RefObject<any>}
      >
        {rows}
      </Container>
    </Stack>
  );
};
