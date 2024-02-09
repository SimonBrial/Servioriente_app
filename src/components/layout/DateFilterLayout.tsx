import { Button, Divider, Flex, Stack, Title } from "@mantine/core";
import { BsFilter } from "../../icons";

function DateFilterLayout (): JSX.Element {
  return (
    <Stack>
      <Title order={2} style={{ color: "#696969", textAlign: "center" }}>
        FILTRAR CATEGORIA
        <Divider
          size="md"
          styles={(theme) => ({
            root: {
              borderColor: `${theme.colors.principalTheme[6]}`,
            },
          })}
        />
      </Title>
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Desde
        </Title>
        <p>Aqui va el input del calendario</p>
      </Flex>
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5} style={{ color: "#696969" }}>
          Desde
        </Title>
        <p>Aqui va el input del calendario</p>
      </Flex>
      <Button
        leftSection={<BsFilter />}
        styles={(theme) => ({
          section: { fontSize: "1.8rem" },
          root: {
            backgroundColor: `${theme.colors.principalTheme[6]}`,
          },
        })}
      >
        Aplicar Filtros
      </Button>
    </Stack>
  );
}

export default DateFilterLayout;
