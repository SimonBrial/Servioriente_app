import { Divider, Flex, Stack, Text } from "@mantine/core";

export default function AlarmCardDate({
  themeColor,
  label,
  date,
}: {
  themeColor: string;
  label: string;
  date: string;
}): JSX.Element {
  return (
    <Stack gap={1} w={"100%"}>
      <Flex align={"center"} gap={10}>
        <Text
          size="sm"
          styles={(theme) => ({
            root: { color: `${theme.colors.lightTheme[3]}` },
          })}
        >
          {label}:
        </Text>
        <Text
          size="xs"
          styles={(theme) => ({
            root: { color: `${theme.colors.principalTheme[6]}` },
            transition: "color 0.3s ease-in-out",
          })}
        >
          {date}
        </Text>
      </Flex>
      <Divider
        size="xs"
        styles={(theme) => ({
          root: { borderColor: themeColor },
        })}
      />
    </Stack>
  );
}
