import { MdOutlineDragIndicator } from "@/icons";
import { socialRedColor } from "@/utils/socialRedColor";
import {
  useMantineColorScheme,
  Center,
  Select,
  Title,
  Flex,
} from "@mantine/core";
import React from "react";
import { ProcessedConversationItemProps } from "@/interface/interface";
import classes from "@/styles/dashboard.module.css";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

interface ConversationItemProps extends ProcessedConversationItemProps {
  socialMediaIcon: React.ReactNode;
}

export const ProcessedConversationItem = ({
  totalConversations,
  socialMediaIcon,
  iconName,
  id,
}: ConversationItemProps) => {
  const adminArr: string[] = ["Mario Hurtado", "Simon Briceño"];
  const { colorScheme } = useMantineColorScheme();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "0.5rem 0.8rem",
  };

  return (
    <Flex
      style={style}
      ref={setNodeRef}
      {...attributes}
      gap={8}
      justify={"space-between"}
      align={"center"}
      className={
        colorScheme === "light"
          ? classes.proccessedConversation_item
          : classes.proccessedConversation_item_dark
      }
    >
      <Center
        /* {...attributes} {...listeners} */ className="handler"
        {...listeners}
      >
        <MdOutlineDragIndicator />
      </Center>
      <Center
        style={{
          fontSize: iconName !== "facebook" ? "1.3rem" : "0.9rem",
          padding: iconName !== "facebook" ? "0" : "0.3rem",
          borderRadius: iconName === "instagram" ? "6px" : "15px",
          color: iconName === "whatsapp" ? socialRedColor("whatsapp") : "white",
          background:
            iconName === "instagram"
              ? "linear-gradient(45deg, rgba(250, 199, 93, 1) 0%, rgba(253, 14, 120, 1) 50%, rgba(45, 104, 221, 1) 100%)"
              : iconName === "whatsapp"
                ? "white"
                : socialRedColor(iconName),
        }}
      >
        {socialMediaIcon}
      </Center>
      <Title order={5}>{totalConversations}</Title>
      <Select
        variant="unstyled"
        defaultValue={adminArr[0]}
        placeholder="Selecciona un admin"
        data={adminArr}
        styles={(theme) => ({
          root: { width: "100%" },
          input: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
            width: "100%",
            fontSize: "0.8rem",
          },
          section: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
          },
          options: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
          },
        })}
      />
    </Flex>
  );
};
