import {
  Checkbox,
  Divider,
  Flex,
  Stack,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import checkboxClasses from "@/styles/sidebarSectionSelection.module.css"

export const ItemFilterLayout = ({ label }: { label: string }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
      <Flex justify={"space-between"} align={"center"}>
        <Title
          order={5}
          style={{ color: colorScheme === "light" ? "#696969" : "#f8f8f8" }}
        >
          {label}
        </Title>
        <Checkbox
          aria-label={label}
          color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
          classNames={{
            input:
              colorScheme === "light"
                ? checkboxClasses.checkbox
                : checkboxClasses.checkbox_dark,
          }}
        />
      </Flex>
      <Divider
        size={"xs"}
        color={colorScheme === "light" ? "#696969" : "#f8f8f8"}
      />
    </Stack>
  );
};
