"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import {
  useMantineColorScheme,
  Divider,
  Avatar,
  Badge,
  Stack,
  Flex,
  Box,
  Text,
} from "@mantine/core";

export const AvatarGroup = ({
  usersArr,
}: {
  usersArr: string[];
}): JSX.Element => {
  // let avatarGroup: JSX.Element[] = [];
  const { colorScheme } = useMantineColorScheme();
  let nameGroup: JSX.Element[] = [];
  function generateAvatarGroup(
    usersArr: string[],
  ): JSX.Element | JSX.Element[] {
    if (usersArr.length > 4) {
      return (
        <Box style={{ position: "relative" }}>
          <Flex>
            <Avatar
              size={"lg"}
              variant="filled"
              color={colorScheme === "light" ? "#696969" : "#3a4c5a"}
            />
            <Avatar
              size={"lg"}
              variant="filled"
              color={colorScheme === "light" ? "#696969" : "#3a4c5a"}
              style={{
                position: "absolute",
                marginLeft: "2.9rem",
                borderLeft: "3px solid white",
              }}
            />
            <Avatar
              size={"lg"}
              variant="filled"
              color={colorScheme === "light" ? "#696969" : "#3a4c5a"}
              style={{
                position: "absolute",
                marginLeft: "calc(2.9rem*2)",
                borderLeft: "3px solid white",
              }}
            />
            <Avatar
              size={"lg"}
              variant="filled"
              color={colorScheme === "light" ? "#696969" : "#3a4c5a"}
              style={{
                position: "absolute",
                marginLeft: "calc(2.9rem*3)",
                borderLeft: "3px solid white",
              }}
            />
            <Badge
              size="md"
              radius={"sm"}
              color={colorScheme === "light" ? "#004EE5" : "#52A5E0"}
              styles={{
                root: {
                  position: "absolute",
                  marginLeft: "12.5rem",
                  marginTop: "1rem",
                },
              }}
            >
              {usersArr.length - 4} +
            </Badge>
          </Flex>
        </Box>
      );
    } else {
      return (
        <Box style={{ position: "relative" }}>
          <Flex style={{ height: "3.5rem" }}>
            {usersArr.map((user, index) => (
              <Avatar
                key={index}
                size={"lg"}
                variant="filled"
                style={(theme) => ({
                  position: "absolute",
                  marginLeft: `calc(2.9rem*${index})`,
                  borderLeft: "3px solid white",
                })}
              />
            ))}
          </Flex>
        </Box>
      );
    }
  }
  function generateNameGroup(usersArr: string[]): JSX.Element[] {
    nameGroup = usersArr.map((user, index) => (
      <Flex gap={4} key={crypto.randomUUID()}>
        <Text
          styles={(theme) => ({
            root: {
              fontSize: "0.8rem",
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
          key={index}
        >
          {user}
        </Text>
        {index !== usersArr.length - 1 ? (
          <Divider
            orientation="vertical"
            color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"}
          />
        ) : (
          <></>
        )}
      </Flex>
    ));
    return nameGroup;
  }

  return (
    <Stack style={{ width: "100%" }} gap={5}>
      {generateAvatarGroup(usersArr)}
      <GeneralDivider />
      <Flex gap={4}>{generateNameGroup(usersArr)}</Flex>
    </Stack>
  );
};
