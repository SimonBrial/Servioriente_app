"use client";

import {
  useMantineColorScheme,
  FileInput,
  TextInput,
  Center,
  Flex,
  Box,
} from "@mantine/core";
import { IoSend, HiOutlineFaceSmile, HiPaperClip } from "@/icons";
import classes from "@/styles/general-styles.module.css";
import { notifications } from "@mantine/notifications";

export default function ChatInputText(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box>
      <Flex
        gap={8}
        className={
          colorScheme === "light"
            ? classes.chatInputText
            : classes.chatInputText_dark
        }
      >
        <Center>
          <HiOutlineFaceSmile
            className={
              colorScheme === "light"
                ? classes.chatInputText_icon
                : classes.chatInputText_icon_dark
            }
          />
        </Center>
        <FileInput
          variant="unstyled"
          leftSectionPointerEvents="none"
          leftSection={
            <Center>
              <HiPaperClip
                className={
                  colorScheme === "light"
                    ? classes.chatInputText_icon
                    : classes.chatInputText_icon_dark
                }
              />
            </Center>
          }
        />
        <TextInput
          style={{ width: "100%" }}
          styles={(theme) => ({
            input: {
              backgroundColor:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[0]}`
                  : `${theme.colors.darkTheme[2]}`,
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[5]}`,
            },
          })}
        />
        <Center
          onClick={() =>
            notifications.show({
              id: crypto.randomUUID(),
              color: "#2BDD66",
              title: "Mensaje Enviado",
              message: "Mensaje ha sido enviado satisfactoriamente 😎!",
              autoClose: 1000,
              withCloseButton: true,
            })
          }
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[6]}`
                  : `${theme.colors.darkTheme[1]}`,
            },
            cursor: "pointer",
          })}
        >
          <IoSend
            /* style={{
              fontSize: "1.5rem",
              transform: "rotate(-45deg)",
              cursor: "pointer",
              marginLeft: "0.6rem",
            }} */
            className={
              colorScheme === "light"
                ? classes.chatInputText_sendIcon
                : classes.chatInputText_sendIcon_dark
            }
          />
        </Center>
      </Flex>
    </Box>
  );
}
