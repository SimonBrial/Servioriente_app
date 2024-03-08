"use client";

import { HiOutlinePencil } from "@/icons";
import {
  Badge,
  Center,
  Flex,
  Text,
  Title,
  UnstyledButton,
  Stack,
  Divider,
} from "@mantine/core";

export default function AlarmFolderTitle(): JSX.Element {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting";

  return (
    <>
      <Flex align={"center"} justify={"space-between"}>
        <Stack gap={1} w={"60%"}>
          <Flex align={"center"} gap={5}>
            <Text size="1.6rem">🎂</Text>
            <Title order={3}>Cumpleaños</Title>
            <Badge
              color="blue"
              radius="sm"
              style={{ marginLeft: "0.5rem" }}
              styles={{ label: { fontSize: "0.9rem" } }}
            >
              9
            </Badge>
          </Flex>
          <Divider size="md" />
        </Stack>
        <UnstyledButton style={{ fontSize: "1.5rem" }}>
          <Center>
            <HiOutlinePencil />
          </Center>
        </UnstyledButton>
      </Flex>
      <Text size="sm" mah={10} style={{ marginTop: "-0.8rem" }}>
        {description.length > 100
          ? description.slice(0, 100).concat("...")
          : description}
      </Text>
    </>
  );
}
