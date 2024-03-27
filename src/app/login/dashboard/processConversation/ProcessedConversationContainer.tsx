"use client";

import { ProcessedConversationItem } from "../processConversation/ProcessedConversationItem";
import { FaFacebookF, IoLogoInstagram, IoLogoWhatsapp } from "@/icons";
import { ProcessedConversationItemProps } from "@/interface/interface";
import { ContainerInside } from "@/components/container/ContainerInside";
import { Flex, Stack, Title, useMantineColorScheme } from "@mantine/core";
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
  horizontalListSortingStrategy,
  SortableContext,
  arrayMove,
} from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { useId, useState } from "react";

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
  const idDnD = useId();
  const { colorScheme } = useMantineColorScheme();
  const [socialMedia, setSocialMedia] =
    useState<ProcessedConversationItemProps[]>(mediaSocialArray);

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

  const rows = socialMedia.map((itemMedia) => {
    const { iconName, id, totalConversations, socialMediaIcon } = itemMedia;
    return (
      <ProcessedConversationItem
        totalConversations={totalConversations}
        socialMediaIcon={socialMediaIcon}
        iconName={iconName}
        key={id}
        id={id}
      />
    );
  });
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
          modifiers={[restrictToHorizontalAxis]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          id={idDnD}
        >
          <SortableContext
            strategy={horizontalListSortingStrategy}
            items={socialMedia}
          >
            <Flex gap={4}>{rows}</Flex>
          </SortableContext>
        </DndContext>
      </Stack>
    </ContainerInside>
  );
};
