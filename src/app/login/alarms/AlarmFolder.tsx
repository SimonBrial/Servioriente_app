"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  AlarmCardArray,
  AlarmFolderArray,
  AlarmObj,
} from "@/interface/interface";
import {
  Container,
  Collapse,
  Divider,
  Center,
  Title,
  Stack,
  Badge,
  Flex,
  Text,
  Grid,
} from "@mantine/core";
import AlarmCard from "./AlarmCard";
import { PiFolderSimpleDashed } from "@/icons";
import BtnFolderActions from "./buttons/BtnFolderActions";

export default function AlarmFolder({
  alarmsArray,
  description,
  themeColor,
  idFolder,
  title,
  icon,
}: AlarmFolderArray): JSX.Element {
  const [opened, { toggle }] = useDisclosure(false);

  let items: JSX.Element[];

  function cardItems(): JSX.Element[] {
    if (alarmsArray.length > 0) {
      return alarmsArray.map((item: AlarmObj) => {
        const {
          folderAssigned,
          alarmTitle,
          automated,
          createAt,
          createdTo,
          description,
          id,
          privateAlarm,
          privateUser,
          toDate,
          color,
          folderIcon,
          icon,
        } = item;
        return (
          <Grid.Col key={item.id} span={4}>
            <AlarmCard
              folderAssigned={folderAssigned}
              privateAlarm={privateAlarm}
              privateUser={privateUser}
              description={description}
              themeColor={themeColor}
              alarmTitle={alarmTitle}
              folderIcon={folderIcon}
              automated={automated}
              createdTo={createdTo}
              createAt={createAt}
              toDate={toDate}
              color={color}
              icon={icon}
              id={id}
            />
          </Grid.Col>
        );
      });
    }

    return [];
  }
  return (
    <Container
      p={12}
      w={"100%"}
      style={{
        border: `2px solid ${themeColor}`,
        borderRadius: "6px",
        backgroundColor: `${themeColor}33`,
      }}
    >
      <Stack pb={5}>
        <Flex
          align={"center"}
          justify={"space-between"}
          styles={{ root: { color: themeColor } }}
        >
          <Stack gap={1} w={"60%"} onClick={toggle}>
            <Flex
              align={"center"}
              gap={5}
              style={{
                cursor: `${cardItems().length > 3 ? "pointer" : "default"}`,
              }}
            >
              <Text size="1.6rem">{icon}</Text>
              <Title order={3}>{title}</Title>
              <Badge
                radius="sm"
                style={{ marginLeft: "0.5rem" }}
                styles={{
                  root: { backgroundColor: `${themeColor}` },
                  label: { fontSize: "0.9rem", color: "#FFF" },
                }}
              >
                {alarmsArray.length}
              </Badge>
            </Flex>
            <Divider size="md" color={themeColor} />
          </Stack>
          {/* <Tooltip
            label="Editar"
            withArrow
            offset={5}
            position="top"
            color="#FD0E78"
            styles={(theme) => ({
              tooltip: { backgroundColor: `${"#FD0E78"}` },
            })}
            transitionProps={{ transition: "scale", duration: 300 }}
          >
          </Tooltip> */}
          {/* <BtnEdit
            key={crypto.randomUUID()}
            id={crypto.randomUUID()}
            buttonStyles="unstyled"
            description="Cambios en los datos de la carpeta fueron registrados satisfactoriamente 😎!"
            title="Carpeta Editada"
            labelBtn="Guardar"
            color="#2BDD66"
            icon
          >
            <CreateFolderLayout title="Editar Carpeta" />
          </BtnEdit> */}
          <BtnFolderActions idFolder={idFolder} theme={themeColor} />
        </Flex>
        <Text
          size="sm"
          mah={10}
          styles={(theme) => ({
            root: {
              color: `${themeColor}`,
              marginTop: "-0.8rem",
              cursor: "default",
            },
          })}
        >
          {description.length > 100
            ? description.slice(0, 100).trim().concat("...")
            : description}
        </Text>
        {cardItems().length === 0 ? (
          <Container>
            <Flex
              gap={8}
              align={"center"}
              styles={{ root: { color: `${themeColor}` } }}
            >
              <Center>
                <PiFolderSimpleDashed style={{ fontSize: "2.5rem" }} />
              </Center>
              <Text size="2rem">Carpeta vacía</Text>
            </Flex>
          </Container>
        ) : (
          <>
            {cardItems().length > 3 ? (
              <>
                <Grid gutter="xs" pt={5} style={{ marginBottom: "-0.3rem" }}>
                  {cardItems().slice(0, 3)}
                </Grid>
                <Collapse in={opened}>
                  <Grid gutter="xs">{cardItems().slice(3)}</Grid>
                </Collapse>
              </>
            ) : (
              <Grid gutter="xs" pt={5}>
                {cardItems()}
              </Grid>
            )}
          </>
        )}
      </Stack>
    </Container>
  );
}
