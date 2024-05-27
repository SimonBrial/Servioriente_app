"use client";

import {
  useMantineColorScheme,
  Container,
  Divider,
  Center,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import AlarmCardDate from "./AlarmCardDate";
import { AlarmObj } from "@/interface/interface";
import { HiOutlineLockClosed, HiOutlineLockOpen, PiRobot } from "@/icons";
import TooltipLayout from "@/components/TooltipLayout";
import { useAlarmStore } from "@/store/alarm-store";

interface AlarmCardProps extends AlarmObj {
  themeColor: string;
}

export default function AlarmCard({
  folderAssigned,
  privateAlarm,
  privateUser,
  description,
  themeColor,
  alarmTitle,
  folderIcon,
  automated,
  createdTo,
  createAt,
  toDate,
  color,
  icon,
  id,
}: AlarmCardProps): JSX.Element {
  // console.log(folderAssigned);
  const { colorScheme } = useMantineColorScheme();
  const { fnGetAlarm } = useAlarmStore();
  return (
    <>
      <Container
        onClick={() => fnGetAlarm(id, folderAssigned)}
        p={10}
        style={{
          border: `1px solid ${themeColor}`,
          width: "100%",
          borderRadius: "6px",
          cursor: "pointer",
          backgroundColor: "#FFFF",
        }}
      >
        <Stack gap={4}>
          <Flex
            align={"center"}
            justify={"space-between"}
            styles={{ root: { color: `${"#696969"}` } }}
          >
            <Stack gap={1} w={"95%"}>
              <Flex align={"center"} justify={"space-between"} gap={5}>
                <Flex>
                  <Text size="1.2rem">🎂</Text>
                  <Title
                    order={6}
                    styles={{
                      root: { color: themeColor },
                    }}
                  >
                    {alarmTitle}
                  </Title>
                </Flex>
                <Flex mr={5} gap={4}>
                  {privateAlarm ? (
                    <TooltipLayout label="Privado" position="top">
                      <Center
                        styles={(theme) => ({
                          root: {
                            fontSize: "1rem",
                            color:
                              colorScheme === "light"
                                ? `${theme.colors.lightTheme[3]}`
                                : `${theme.colors.darkTheme[2]}`,
                          },
                        })}
                      >
                        <HiOutlineLockClosed />
                      </Center>
                    </TooltipLayout>
                  ) : (
                    <TooltipLayout label="Publico" position="top">
                      <Center
                        styles={(theme) => ({
                          root: {
                            fontSize: "1rem",
                            color:
                              colorScheme === "light"
                                ? `${theme.colors.lightTheme[3]}`
                                : `${theme.colors.darkTheme[2]}`,
                          },
                        })}
                      >
                        <HiOutlineLockOpen />
                      </Center>
                    </TooltipLayout>
                  )}
                  {automated ? (
                    <TooltipLayout label="Automatizado" position="top">
                      <Center
                        styles={(theme) => ({
                          root: {
                            fontSize: "1rem",
                            color:
                              colorScheme === "light"
                                ? `${theme.colors.lightTheme[3]}`
                                : `${theme.colors.darkTheme[2]}`,
                          },
                        })}
                      >
                        <PiRobot />
                      </Center>
                    </TooltipLayout>
                  ) : null}
                </Flex>
              </Flex>
              <Divider
                size="md"
                styles={{ root: { borderColor: themeColor } }}
              />
            </Stack>
          </Flex>
          <AlarmCardDate
            themeColor={themeColor}
            key={crypto.randomUUID()}
            date={createAt}
            label="Creado"
          />
          <AlarmCardDate
            themeColor={themeColor}
            key={crypto.randomUUID()}
            date={toDate}
            label="Para"
          />
          <Container h={"2rem"} style={{ overflow: "hidden" }} p={0}>
            <Text
              styles={(theme) => ({
                root: {
                  width: "100%",
                  lineHeight: "16px",
                  fontSize: "0.8rem",
                  color: `${theme.colors.lightTheme[3]}`,
                },
              })}
            >
              {description}
            </Text>
          </Container>
        </Stack>
      </Container>
    </>
  );
}
