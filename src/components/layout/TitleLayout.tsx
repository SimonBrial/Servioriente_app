"use client";
import {
  useMantineColorScheme,
  Divider,
  Title,
  Stack,
  Text,
  Flex,
} from "@mantine/core";
import { TitleLayoutProps } from "@/interface/interface";
import { underScoreColor } from "@/utils/underScoreColor";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export function TitleLayout({
  onText,
  title,
  color,
  icon,
}: TitleLayoutProps): JSX.Element {
  /*
  { id: "Espera", color: "#E5DB00" },
    { id: "Generacion", color: "#E56000" },
    { id: "Pagado", color: "#12E500" },
    { id: "Entregado", color: "#004EE5" },
  */
  const colorSelected: string = underScoreColor(capitalizeFirstLetter(title));
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack gap={2} style={{ width: "100%" }}>
      <Flex gap={5} justify={"center"} align={"center"}>
        <Text size="1.5rem">{icon}</Text>
        <Title
          order={2}
          style={{
            color:
              colorScheme === "light"
                ? onText
                  ? color !== ""
                    ? color
                    : "#696969"
                  : `${color}`
                : onText
                  ? color !== ""
                    ? color
                    : "#EFF3F5"
                  : `${color}`,
            textAlign: "center",
          }}
        >
          {capitalizeFirstLetter(title)}
        </Title>
      </Flex>
      <Divider
        size="md"
        styles={(theme) => ({
          root: {
            borderColor:
              colorSelected !== "Espera"
                ? color !== ""
                  ? color
                  : colorScheme === "light"
                    ? `${theme.colors.lightTheme[6]}`
                    : `${theme.colors.darkTheme[1]}`
                : colorSelected,
            marginTop: "-0.3rem",
          },
        })}
      />
    </Stack>
  );
}
