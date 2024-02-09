"use client";

import { Flex, Select, Title, useMantineColorScheme } from "@mantine/core";

export function SelectSocialRed(): JSX.Element {
  // const [value, setValue] = useState<string | null>(null);
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex justify={"space-between"} align={"center"} w={"100%"}>
      <Title order={4}> Red social</Title>
      <Select
        w={200}
        placeholder="Seleeciona una red"
        data={["Facebook", "Whatsapp", "Instagram"]}
        styles={(theme) => ({
          input: {
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: `${theme.colors.lightTheme[3]}`,
          },
        })}
      />
    </Flex>
  );
}
