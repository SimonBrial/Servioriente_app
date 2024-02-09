import { HiOutlineDotsVertical } from "@/icons";

import {
  Center,
  Divider,
  Flex,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";

export default function AlarmCardTitle({
  label,
  hover,
}: {
  label: string;
  hover: boolean;
}): JSX.Element {
  return (
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
                color: `${hover ? "#FD0E78" : "#696969"}`,
                transition: "color 0.3s ease-in-out",
              },
            })}
          >
            {label}
          </Title>
        </Flex>
        <Divider
          size="md"
          styles={(theme) => ({ root: { borderColor: `${"#FD0E78"}` } })}
        />
      </Stack>
      <UnstyledButton
        styles={(theme) => ({
          root: { color: `${"#FD0E78"}`, fontSize: "1.2rem" },
        })}
      >
        <Center>
          <HiOutlineDotsVertical />
        </Center>
      </UnstyledButton>
    </Flex>
  );
}
