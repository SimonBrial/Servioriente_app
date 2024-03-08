"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import React, { useState } from "react";
import { ProcessedConversationItem } from "./ProcessedConversationItem";
import { FaFacebookF, IoLogoInstagram, IoLogoWhatsapp } from "@/icons";
import { Flex, Stack, Title, useMantineColorScheme } from "@mantine/core";
import { GeneralDivider } from "@/components/GeneralDivider";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { ProcessedConversationItemProps } from "@/interface/interface";

const mediaSocialArray: ProcessedConversationItemProps[] = [
  {
    id: crypto.randomUUID(),
    iconName: "instagram",
    totalConversations: 8,
    socialMediaIcon: <IoLogoInstagram />,
  },
  {
    id: crypto.randomUUID(),
    iconName: "facebook",
    totalConversations: 8,
    socialMediaIcon: <FaFacebookF />,
  },
  {
    id: crypto.randomUUID(),
    iconName: "whatsapp",
    totalConversations: 8,
    socialMediaIcon: <IoLogoWhatsapp />,
  },
];

export const ProcessedConversationContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const [socialMedia, setSocialMedia] =
    useState<ProcessedConversationItemProps[]>(mediaSocialArray);

  const rows = socialMedia.map((itemMedia) => {
    const { iconName, id, totalConversations, socialMediaIcon } = itemMedia;
    return (
      <ProcessedConversationItem
        key={id}
        id={id}
        iconName={iconName}
        totalConversations={totalConversations}
        socialMediaIcon={socialMediaIcon}
      />
    );
  });

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!active.id !== over.id) {
      setSocialMedia((item) => {
        const oldIndex = item.findIndex((it) => it.id === active.id);
        const newIndex = item.findIndex((it) => it.id === over.id);
        return arrayMove(item, oldIndex, newIndex);
      });
    }
  };
  return (
    <ContainerInside allWhite width="100%" withBorder>
      <Stack gap={4}>
        <Stack gap={0}>
          <Title
            order={4}
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            Conversaciones Procesadas
          </Title>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
        </Stack>
        <DndContext
          onDragEnd={handleDragEnd}
          modifiers={[restrictToHorizontalAxis]}
        >
          <SortableContext items={socialMedia}>
            <Flex gap={4}>{rows}</Flex>
          </SortableContext>
        </DndContext>
      </Stack>
    </ContainerInside>
  );
};
