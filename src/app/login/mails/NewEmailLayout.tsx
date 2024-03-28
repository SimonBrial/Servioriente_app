import TextEditor from "@/components/TextEditor";
import { TitleLayout } from "@/components/layout/TitleLayout";
import {
  useMantineColorScheme,
  ScrollArea,
  FileInput,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import heightClasses from "@/styles/height-view.module.css";
import { ContainerInside } from "@/components/container/ContainerInside";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { HiOutlineMail, HiPaperClip, MdOutlineTitle } from "@/icons";
import { GeneralDivider } from "@/components/GeneralDivider";
import { useState } from "react";

export default function NewEmailLayout() {
  const { colorScheme } = useMantineColorScheme();
  const [file, setFile] = useState<File | null>(null);
  console.log(file)
  return (
    <>
      <TitleLayout
        color=""
        icon=""
        onText
        title="Crear Nuevo Correo"
        key={crypto.randomUUID()}
      />

      <Stack mb={5} gap={6}>
        <HorizontalInputLayout
          asterisk={false}
          icon={<HiOutlineMail />}
          inputSize="300px"
          title="Correo"
        />
        <HorizontalInputLayout
          asterisk={false}
          icon={<MdOutlineTitle />}
          inputSize="300px"
          title="Titulo"
        />
        <Flex align={"center"} justify={"space-between"} w={"100%"}>
          <Title
            order={4}
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? theme.colors.lightTheme[3]
                    : theme.colors.darkTheme[2],
              },
            })}
          >
            Cargar Archivo
          </Title>
          <FileInput
            value={file}
            onChange={setFile}
            variant="default"
            w={"250px"}
            leftSectionPointerEvents="none"
            placeholder="Selecciona un Archivo..."
            styles={(theme) => ({
              input: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
                color: `${theme.colors.lightTheme[3]}`,
              },
              section: {
                color: theme.colors.lightTheme[3],
              },
            })}
            leftSection={<HiPaperClip />}
          />
        </Flex>
      </Stack>
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      <Title
        order={5}
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
          },
        })}
      >
        Agregar Descripcion
      </Title>

      <ContainerInside
        allWhite
        width="100%"
        withBorder
        key={crypto.randomUUID()}
      >
        <ScrollArea
          scrollbarSize={0}
          p={0}
          className={heightClasses.sendMail_scroll_container}
        >
          <TextEditor />
        </ScrollArea>
      </ContainerInside>
    </>
  );
}
