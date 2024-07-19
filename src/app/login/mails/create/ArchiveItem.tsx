"use client";

import TooltipLayout from "@/components/TooltipLayout";
import {
  useMantineColorScheme,
  ActionIcon,
  Center,
  Group,
  Pill,
  Flex,
  Stack,
  Title,
} from "@mantine/core";
import {
  MdOutlineVideoLibrary,
  HiOutlineDocumentText,
  FaRegFilePowerpoint,
  GrDocumentExcel,
  MdOutlineImage,
  FaQuestion,
  IoClose,
  IoOpenOutline,
} from "@/icons";
import Link from "next/link";

export default function ArchiveItem({
  handleDelete,
  doc,
}: {
  handleDelete: (archiveName: string) => void;
  doc: File;
}) {
  const { colorScheme } = useMantineColorScheme();

  const ext = doc.name.split(".");

  const docSizeCalc = (size: number) => {
    const sizeKB = (size / 1024).toFixed(2);
    const sizeMB = (parseFloat(sizeKB) / 1024).toFixed(2);

    if (parseFloat(sizeKB) < 1024) {
      return `${sizeKB} KB`;
    }

    return `${sizeMB} MB`;
  };

  const selectIcon = (): React.JSX.Element => {
    const imgExtension = ["jpg", "jpeg", "png", "gif", "bmp", "svg"];
    const docsExtension = ["pdf", "doc", "docx", "rtf", "odt"];
    const excelExtension = ["xls", "xlsx", "csv"];
    const ppExtension = ["ppt", "pptx"];
    const mediaExtension = ["mp3", "mp4", "avi", "mov"];

    if (imgExtension.includes(ext[ext.length - 1])) {
      return <MdOutlineImage />;
    }
    if (docsExtension.includes(ext[ext.length - 1])) {
      return <HiOutlineDocumentText />;
    }
    if (excelExtension.includes(ext[ext.length - 1])) {
      return <GrDocumentExcel />;
    }
    if (ppExtension.includes(ext[ext.length - 1])) {
      return <FaRegFilePowerpoint />;
    }
    if (mediaExtension.includes(ext[ext.length - 1])) {
      return <MdOutlineVideoLibrary />;
    }
    return <FaQuestion />;
  };
  return (
    <TooltipLayout label={doc.name} position="top-end">
      <Link href={doc.name}>
        <Group
          align="center"
          justify="center"
          styles={(theme) => ({
            root: {
              borderRadius: "6px",
              backgroundColor:
                colorScheme === "light"
                  ? theme.colors.lightTheme[1]
                  : theme.colors.darkTheme[9],
              border:
                colorScheme === "light"
                  ? `1px solid ${theme.colors.lightTheme[2]}`
                  : `1px solid ${theme.colors.darkTheme[6]}`,
              padding: "0.5rem",
              width: "70px",
              height: "70px",
              position: "relative",
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[6]
                  : theme.colors.darkTheme[1],
            },
          })}
        >
          {/* <Link
            href={doc.name}
            target="_blank"
            style={{ position: "absolute", top: "0rem", left: "0.1rem" }}
          >
            <ActionIcon
              variant="subtle"
              radius="xl"
              size={15}
              aria-label="close"
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[6]
                      : theme.colors.darkTheme[1],
                },
              })}
            >
              <IoOpenOutline />
            </ActionIcon>
          </Link> */}
          <ActionIcon
            variant="subtle"
            radius="xl"
            size={15}
            aria-label="close"
            styles={(theme) => ({
              root: {
                position: "absolute",
                top: "0.1rem",
                right: "0.1rem",
                color:
                  colorScheme === "light"
                    ? theme.colors.lightTheme[6]
                    : theme.colors.darkTheme[1],
              },
            })}
            onClick={() => handleDelete(doc.name)}
          >
            <IoClose />
          </ActionIcon>
          <Stack gap={0} justify="center">
            <Center style={{ fontSize: "2rem" }}>{selectIcon()}</Center>
            <Flex
              justify={"space-between"}
              align={"center"}
              style={{
                position: "absolute",
                bottom: "0rem",
                right: "0.2rem",
              }}
            >
              <Pill
                size="xs"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[6]
                        : theme.colors.darkTheme[1],
                    border: "none",
                  },
                })}
              >
                {docSizeCalc(doc.size)}
              </Pill>
            </Flex>
          </Stack>
        </Group>
      </Link>
    </TooltipLayout>
  );
}
