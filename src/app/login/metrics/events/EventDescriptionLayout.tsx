import { PriorityBadge } from "@/components/badge/PriorityBadge";
import { GeneralDivider } from "@/components/GeneralDivider";
import { TitleLayout } from "@/components/layout/TitleLayout";
import RegisterInfo from "@/components/RegisterInfo";
import {
  useMantineColorScheme,
  ScrollArea,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import classes from "@/styles/height-view.module.css";

export default function EventDescriptionLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack p={0} style={{ width: "100%" }}>
      <TitleLayout
        title="Descripcion de la Tarea"
        icon=""
        color=""
        onText={false}
      />
      <RegisterInfo
        keyInput={"Titulo: "}
        valueInput={"Generar RCV al cliente de Caracas"}
        key={crypto.randomUUID()}
      />
      <Stack gap={0}>
        <Flex
          justify={"space-between"}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
              marginBottom: "0.2rem",
            },
          })}
        >
          <Title order={5}>Prioridad</Title>
          <Title order={5}>
            <PriorityBadge title="Muy Importante" />
          </Title>
        </Flex>
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
      <Stack gap={0}>
        <Flex
          justify={"space-between"}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
              marginBottom: "0.2rem",
            },
          })}
        >
          <Title order={5}>Estado</Title>
          <Title order={5}>No Completado</Title>
        </Flex>
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
      <RegisterInfo
        keyInput={"Fecha: "}
        valueInput={"Febrero 06, 2024"}
        key={crypto.randomUUID()}
      />
      <ScrollArea scrollbarSize={2} className={classes.metrics_event_container}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi
        consequatur, dolorem dolore distinctio quia maiores officiis fuga
        delectus recusandae, esse dolorum beatae, asperiores rem voluptas?
        Repudiandae optio sint quia? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis excepturi consequatur, dolorem dolore distinctio
        quia maiores officiis fuga delectus recusandae, esse dolorum beatae,
        asperiores rem voluptas? Repudiandae optio sint quia? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Omnis excepturi consequatur,
        dolorem dolore distinctio quia maiores officiis fuga delectus
        recusandae, esse dolorum beatae, asperiores rem voluptas? Repudiandae
        optio sint quia? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Omnis excepturi consequatur, dolorem dolore distinctio quia
        maiores officiis fuga delectus recusandae, esse dolorum beatae,
        asperiores rem voluptas? Repudiandae optio sint quia? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Omnis excepturi consequatur,
        dolorem dolore distinctio quia maiores officiis fuga delectus
        recusandae, esse dolorum beatae, asperiores rem voluptas? Repudiandae
        optio sint quia? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Omnis excepturi consequatur, dolorem dolore distinctio quia
        maiores officiis fuga delectus recusandae, esse dolorum beatae,
        asperiores rem voluptas? Repudiandae optio sint quia? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Omnis excepturi consequatur,
        dolorem dolore distinctio quia maiores officiis fuga delectus
        recusandae, esse dolorum beatae, asperiores rem voluptas? Repudiandae
        optio sint quia? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Omnis excepturi consequatur, dolorem dolore distinctio quia
        maiores officiis fuga delectus recusandae, esse dolorum beatae,
        asperiores rem voluptas? Repudiandae optio sint quia?
      </ScrollArea>
    </Stack>
  );
}
