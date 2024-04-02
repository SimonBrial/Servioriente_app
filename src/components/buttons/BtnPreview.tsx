"use client";

import { HiOutlineEye, IoClose } from "@/icons";
import {
  Button,
  Drawer,
  ScrollArea,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { TitleLayout } from "../layout/TitleLayout";
import classes from "@/styles/btn-styles.module.css";
import heightClasses from "@/styles/height-view.module.css";
import InsideContainer from "../container/InsideContainer";

export const BtnPreview = (): JSX.Element => {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <Stack gap={6} justify="space-between" style={{ height: "95vh" }}>
          <TitleLayout color="" icon="" onText title="Vista Previa" />
          <InsideContainer
            offset={115}
            withBackground
            withBorder
            key={crypto.randomUUID()}
          >
            <ScrollArea
              scrollbarSize={2}
              offsetScrollbars
              className={heightClasses.listDifusion_scroll_container}
            >
              Welcome to Mantine rich text editor RichTextEditor component
              focuses on usability and is designed to be as simple as possible
              to bring a familiar editing experience to regular users.
              RichTextEditor is based on Tiptap.dev and supports all of its
              features: General text formatting: bold, italic, underline,
              strike-through Headings (h1-h6) Sub and super scripts (<sup /> and{" "}
              <sub /> tags) Ordered and bullet lists Text align And all otherWelcome to Mantine rich text editor RichTextEditor component
              focuses on usability and is designed to be as simple as possible
              to bring a familiar editing experience to regular users.
              RichTextEditor is based on Tiptap.dev and supports all of its
              features: General text formatting: bold, italic, underline,
              strike-through Headings (h1-h6) Sub and super scripts (<sup /> and{" "}
              <sub /> tags) Ordered and bullet lists Text align And all otherWelcome to Mantine rich text editor RichTextEditor component
              focuses on usability and is designed to be as simple as possible
              to bring a familiar editing experience to regular users.
              RichTextEditor is based on Tiptap.dev and supports all of its
              features: General text formatting: bold, italic, underline,
              strike-through Headings (h1-h6) Sub and super scripts (<sup /> and{" "}
              <sub /> tags) Ordered and bullet lists Text align And all otherWelcome to Mantine rich text editor RichTextEditor component
              focuses on usability and is designed to be as simple as possible
              to bring a familiar editing experience to regular users.
              RichTextEditor is based on Tiptap.dev and supports all of its
              features: General text formatting: bold, italic, underline,
              strike-through Headings (h1-h6) Sub and super scripts (<sup /> and{" "}
              <sub /> tags) Ordered and bullet lists Text align And all otherWelcome to Mantine rich text editor RichTextEditor component
              focuses on usability and is designed to be as simple as possible
              to bring a familiar editing experience to regular users.
              RichTextEditor is based on Tiptap.dev and supports all of its
              features: General text formatting: bold, italic, underline,
              strike-through Headings (h1-h6) Sub and super scripts (<sup /> and{" "}
              <sub /> tags) Ordered and bullet lists Text align And all otherWelcome to Mantine rich text editor RichTextEditor component
              focuses on usability and is designed to be as simple as possible
              to bring a familiar editing experience to regular users.
              RichTextEditor is based on Tiptap.dev and supports all of its
              features: General text formatting: bold, italic, underline,
              strike-through Headings (h1-h6) Sub and super scripts (<sup /> and{" "}
              <sub /> tags) Ordered and bullet lists Text align And all otherWelcome to Mantine rich text editor RichTextEditor component
              focuses on usability and is designed to be as simple as possible
              to bring a familiar editing experience to regular users.
              RichTextEditor is based on Tiptap.dev and supports all of its
              features: General text formatting: bold, italic, underline,
              strike-through Headings (h1-h6) Sub and super scripts (<sup /> and{" "}
              <sub /> tags) Ordered and bullet lists Text align And all other
              extensions
            </ScrollArea>
          </InsideContainer>
          <Button
            onClick={close}
            fullWidth
            variant="#004EE5"
            leftSection={<IoClose />}
            styles={(theme) => ({
              section: { fontSize: "1.2rem" },
              root: { backgroundColor: `${theme.colors.lightTheme[6]}` },
            })}
          >
            Cerrar
          </Button>
        </Stack>
      </Drawer>
      <Button
        onClick={open}
        variant="white"
        fullWidth
        leftSection={<HiOutlineEye />}
        styles={(theme) => ({
          section: { fontSize: "1.2rem" },
        })}
        className={
          colorScheme === "light" ? classes.btnCancel : classes.btnCancel_dark
        }
      >
        Vista Previa
      </Button>
    </>
  );
};
