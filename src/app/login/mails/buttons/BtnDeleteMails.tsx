import { HiOutlineTrash } from "@/icons";
import { Group, Flex, Text, Button, Title } from "@mantine/core";

export default function BtnDeleteMails() {
  return (
    <Group
      justify="space-between"
      styles={(theme) => ({
        root: {
          width: "100%",
          border: "1px solid red",
          padding: "0.5rem",
          borderRadius: "6px",
          color: theme.colors.principalTheme[9],
          backgroundColor: `${theme.colors.principalTheme[9]}7f`,
        },
      })}
    >
      <Title order={5}>Eliminar Correos</Title>
      <Button
        styles={{ section: { fontSize: "1.2rem" } }}
        color="#f0185c"
        leftSection={<HiOutlineTrash />}
      >
        Eliminar
      </Button>
    </Group>
  );
}
