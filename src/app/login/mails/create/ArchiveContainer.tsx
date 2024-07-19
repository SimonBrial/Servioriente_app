"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import { GeneralDivider } from "@/components/GeneralDivider";
import {
  useMantineColorScheme,
  FileInputProps,
  ScrollArea,
  ActionIcon,
  FileInput,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import ArchiveItem from "./ArchiveItem";
import { HiPaperClip, HiOutlineTrash } from "@/icons";
import TooltipLayout from "@/components/TooltipLayout";
import { useEffect, useState } from "react";
import heightClass from "@/styles/height-view.module.css";
import { useMailStore } from "@/store/mail-store";

const CloseIcon: FileInputProps["valueComponent"] = ({ value }) => {
  if (value === null) {
    return null;
  }
  return <></>;
};

export default function ArchiveContainer({
  arr,
  setDocs,
}: {
  arr: File[];
  setDocs: (arr: File[]) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setFiles(arr);
  }, [arr]);

  // console.log("files Form archive container: ", files);

  const deleteElement = (archiveName: string) => {
    if (files.length > 0) {
      const filesFiltered = files.filter((file) => file.name !== archiveName);
      setFiles(filesFiltered);
      setDocs(filesFiltered);
    }
  };

  const totalArchiveSize = (archives: File[]) => {
    const totalSize = archives.reduce((acc, current) => acc + current.size, 0);
    const sizeFormated = (totalSize / 1024 / 1024).toFixed(2);

    if (parseFloat(sizeFormated) < 25.0) {
      // fnReadyToSendMail(true);
      return (
        <Flex
          gap={6}
          style={{ width: "100%", cursor: "default" }}
          justify={"center"}
          align={"center"}
        >
          <Title order={6}>Total:</Title>
          <Title
            order={6}
            styles={(theme) => ({
              root: {
                padding: "0.2rem 0.4rem",
                borderRadius: "6px",
                backgroundColor: `${theme.colors.principalTheme[3]}4a`,
                color: theme.colors.principalTheme[3],
              },
            })}
          >
            {sizeFormated} MB/ 25 MB
          </Title>
        </Flex>
      );
    }

    // fnReadyToSendMail(false);
    return (
      <Flex
        gap={6}
        style={{ width: "100%", cursor: "default" }}
        justify={"center"}
        align={"center"}
      >
        <Title order={6}>Total:</Title>
        <TooltipLayout
          label="Los archivos sobrepasaron el limite permitido (25 MB)"
          position="top-end"
        >
          <Title
            order={6}
            styles={(theme) => ({
              root: {
                padding: "0.2rem 0.4rem",
                borderRadius: "6px",
                backgroundColor: `${theme.colors.principalTheme[9]}4a`,
                color: theme.colors.principalTheme[9],
              },
            })}
          >
            {sizeFormated} MB/ 25 MB
          </Title>
        </TooltipLayout>
      </Flex>
    );
  };

  return (
    <>
      <TooltipLayout label="Insertar Archivos" position="top-end">
        <FileInput
          valueComponent={CloseIcon}
          value={files}
          onChange={(event) => {
            // console.log("event: ", event)
            setFiles(event);
            setDocs(event);
          }}
          leftSection={<HiPaperClip />}
          multiple
          leftSectionPointerEvents="none"
          variant="unstyled"
          styles={(theme) => ({
            root: { position: "absolute", right: "-0.1rem", top: "-0.3rem" },
            section: {
              border:
                colorScheme === "light"
                  ? `1px solid ${theme.colors.lightTheme[2]}`
                  : `1px solid ${theme.colors.darkTheme[6]}`,
              borderRadius: "6px",
              backgroundColor:
                colorScheme === "light" ? "#fff" : theme.colors.darkTheme[7],
            },
          })}
        />
      </TooltipLayout>
      {files.length > 0 && (
        <ContainerInside allWhite width="18rem" withBorder>
          <Stack gap={6}>
            <Flex justify={"space-between"}>
              <Title order={4}>Archivos Cargados</Title>
              <TooltipLayout
                label="Eliminar todos los archivos"
                position="top-end"
              >
                <ActionIcon
                  color="#F0185C"
                  variant="subtle"
                  onClick={() => {
                    setFiles([]);
                    setDocs([]);
                  }}
                >
                  <HiOutlineTrash />
                </ActionIcon>
              </TooltipLayout>
            </Flex>
            <GeneralDivider orientation="horizontal" />
            <ScrollArea
              // h={300}
              scrollbarSize={2}
              className={heightClass.archives_scroll_container}
            >
              <Flex
                wrap={"wrap"}
                gap={6}
                style={{ width: "100%", padding: "0 0.8rem" }}
              >
                {files !== undefined
                  ? files.map((file) => (
                      <ArchiveItem
                        key={file.name}
                        doc={file}
                        handleDelete={() => deleteElement(file.name)}
                      />
                    ))
                  : null}
              </Flex>
            </ScrollArea>
            <GeneralDivider orientation="horizontal" />
            {files !== undefined ? totalArchiveSize(files) : null}
          </Stack>
        </ContainerInside>
      )}
    </>
  );
}
