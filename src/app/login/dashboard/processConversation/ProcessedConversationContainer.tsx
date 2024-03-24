"use client";

import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";
import { ProcessedConversationItem } from "../processConversation/ProcessedConversationItem";
import { FaFacebookF, IoLogoInstagram, IoLogoWhatsapp } from "@/icons";
import { ProcessedConversationItemProps } from "@/interface/interface";
import { ContainerInside } from "@/components/container/ContainerInside";
import { Flex, Stack, Title, useMantineColorScheme } from "@mantine/core";
import { GeneralDivider } from "@/components/GeneralDivider";
import { RefObject } from "react";

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
  const [parent, items] = useDragAndDrop<
  HTMLUListElement,
  ProcessedConversationItemProps
  >(mediaSocialArray, {
    plugins: [animations()],
    dragHandle: ".handler",
  });

  const rows = items.map((itemMedia) => {
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
        <Flex gap={4} ref={parent as RefObject<any>}>
          {rows}
        </Flex>
      </Stack>
    </ContainerInside>
  );
};
