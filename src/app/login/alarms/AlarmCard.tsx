"use client";

import {
  Container,
  Divider,
  Center,
  Stack,
  Title,
  Flex,
  Text,
  Menu,
} from "@mantine/core";
import AlarmCardDate from "./AlarmCardDate";
import { AlarmCardProps } from "../../../interface/interface";
import { useHover } from "@mantine/hooks";
import classes from "@/styles/btn-styles.module.css";
import { HiOutlineDotsVertical } from "@/icons";
import { useRef } from "react";
import BtnDeleteAlarm from "./buttons/BtnDeleteAlarm";
import BtnEditAlarm from "./buttons/BtnEditAlarm";

export default function AlarmCard({
  description,
  createHour,
  createdAt,
  forDate,
  forHour,
  title,
  id,
}: AlarmCardProps): JSX.Element {
  const { hovered, ref } = useHover();
  const editRef = useRef();
  const deleteRef = useRef();
  return (
    <>
      <Container
        ref={ref}
        // id={id}
        p={10}
        style={{
          border: "1px solid red",
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
            styles={(theme) => ({ root: { color: `${"#696969"}` } })}
          >
            <Stack gap={1} w={"95%"}>
              <Flex align={"center"} gap={5}>
                <Text size="1.2rem">🎂</Text>
                <Title
                  order={6}
                  styles={(theme) => ({
                    root: {
                      color: `${hovered ? "#FD0E78" : "#696969"}`,
                      transition: "color 0.3s ease-in-out",
                    },
                  })}
                >
                  {title}
                </Title>
              </Flex>
              <Divider
                size="md"
                styles={(theme) => ({ root: { borderColor: `${"#FD0E78"}` } })}
              />
            </Stack>
            <Menu
              shadow="md"
              closeOnClickOutside={false}
              closeOnItemClick={false}
              zIndex={
                deleteRef.current !== undefined || editRef.current !== undefined
                  ? 0
                  : 300
              }
            >
              <Menu.Target>
                <Center
                  className={classes.btnDot_icon}
                  styles={{
                    root: { color: "#FD0E78", fontSize: "1.2rem" },
                  }}
                >
                  <HiOutlineDotsVertical />
                </Center>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item color="#F06418">
                  <BtnEditAlarm key={crypto.randomUUID()} editRef={editRef} />
                </Menu.Item>
                <Menu.Item color="red">
                  <BtnDeleteAlarm
                    key={crypto.randomUUID()}
                    deleteRef={deleteRef}
                  />
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
          <AlarmCardDate
            key={crypto.randomUUID()}
            date={createdAt}
            hour={createHour}
            label="Creado"
            hover={hovered}
          />
          <AlarmCardDate
            key={crypto.randomUUID()}
            date={forDate}
            hour={forHour}
            label="Para"
            hover={hovered}
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
