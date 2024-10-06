import {
  Container,
  Collapse,
  Divider,
  Center,
  Title,
  Stack,
  Text,
  Flex,
  Box,
} from "@mantine/core";
import React from "react";
import classes from "@/styles/calendar.module.css";
import { HiOutlineDotsVertical } from "@/icons";
import degreeColor from "@/utils/degreeColor";
import { useDisclosure } from "@mantine/hooks";
import { degreeType } from "@/types/types";

interface EventCardProps {
  title: string;
  description: string;
  degree: degreeType;
  userToassign: string;
}

export const EventCard = ({
  userToassign,
  description,
  degree,
  title,
}: EventCardProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Box maw={500} style={{ position: "relative" }}>
      <Flex
        onClick={toggle}
        classNames={{
          root: classes.eventCard,
        }}
        justify={"space-between"}
        style={{
          backgroundColor: degreeColor(degree)[1],
          borderRadius: opened ? "4px 4px 0 0" : "4px",
        }}
      >
        <Flex gap={4} align={"center"} style={{ cursor: "pointer" }}>
          <Divider
            orientation="vertical"
            size={"lg"}
            style={{
              borderRadius: "10px",
              position: "absolute",
              height: opened ? "85%" : "65%",
              transition: "all 0.4s ease-in-out",
            }}
            color={degreeColor(degree)[0]}
          />
          <Title
            order={5}
            style={{
              paddingLeft: "0.7rem",
            }}
          >
            {title}
          </Title>
        </Flex>
        <Center>
          <HiOutlineDotsVertical />
        </Center>
      </Flex>
      <Collapse
        transitionTimingFunction="linear"
        transitionDuration={300}
        in={opened}
        style={{
          marginBottom: "0",
          paddingBottom: "0.5rem",
          height: "100%",
          backgroundColor: degreeColor(degree)[1],
          borderRadius: "0 0 4px 4px",
        }}
      >
        <Container
          style={{
            padding: "0 1rem 0 1.3rem",
          }}
        >
          <Stack gap={2} mb={5}>
            <Flex align={"center"} gap={6}>
              <Title order={5}>Asignado a: </Title>
              <Text>{userToassign}</Text>
            </Flex>
            <Divider color={degreeColor(degree)[0]} />
          </Stack>
          <Text size="sm">{description}</Text>
        </Container>
      </Collapse>
    </Box>
  );
};
