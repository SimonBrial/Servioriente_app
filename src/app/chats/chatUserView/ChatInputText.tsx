"use client";

import {
  Box,
  Flex,
  Center,
  TextInput,
  FileInput,
  useMantineColorScheme,
} from "@mantine/core";
import { IoSend, HiOutlineFaceSmile, HiPaperClip } from "@/icons";

export const ChatInputText = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box>
      <Flex
        gap={8}
        styles={(theme) => ({
          root: {
            border:
              colorScheme === "light"
                ? `1px solid ${theme.colors.lightTheme[3]}`
                : `1px solid ${theme.colors.darkTheme[5]}`,
            padding: "0.5rem 1rem",
            borderRadius: "35px",
            backgroundColor:
              colorScheme === "light"
                ? "#efefef4c"
                : `${theme.colors.darkTheme[7]}`,
          },
        })}
      >
        <Center
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
          <HiOutlineFaceSmile
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          />
        </Center>
        <FileInput
          variant="unstyled"
          leftSectionPointerEvents="none"
          leftSection={
            <Center
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                  cursor: "pointer",
                },
              })}
            >
              <HiPaperClip style={{ fontSize: "1.5rem" }} />
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
            style={{
              fontSize: "1.5rem",
              transform: "rotate(-45deg)",
              cursor: "pointer",
              marginLeft: "0.6rem",
            }}
          />
        </Center>
      </Flex>
    </Box>
  );
};
