"use client";

// import TextEditor from "@/components/TextEditor";
import { BtnPreview } from "@/components/buttons/BtnPreview";
import BtnSend from "@/components/buttons/BtnSend";
import InsideContainer from "@/components/container/InsideContainer";
import { useMantineColorScheme, ScrollArea, Stack, Flex } from "@mantine/core";
import React from "react";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

export const DifusionListEditor = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  const editor = useEditor({
    extensions: [
      Superscript,
      StarterKit,
      SubScript,
      Highlight,
      TextStyle,
      Underline,
      Color,
      Link,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content,
  });
  return (
    <Stack justify="space-between">
      <InsideContainer
        key={crypto.randomUUID()}
        withBackground
        offset={245}
        withBorder
      >
        <ScrollArea h={"100%"} maw={"100%"} scrollbarSize={2} offsetScrollbars>
          <RichTextEditor
            editor={editor}
            styles={(theme) => ({
              root: {
                backgroundColor: "transparent",
                borderColor: "transparent",
              },
              toolbar: {
                backgroundColor:
                  colorScheme === "light"
                    ? "#fff"
                    : `${theme.colors.darkTheme[7]}`,
                borderBottom: "none",
                backdropFilter: "blur(5px)",
              },
              content: { backgroundColor: "transparent" },
            })}
          >
            <RichTextEditor.Toolbar
              sticky
              stickyOffset={10}
              styles={{
                toolbar: {
                  padding: "1rem 0.8rem",
                },
              }}
            >
              <RichTextEditor.ControlsGroup
                styles={{
                  controlsGroup: {
                    margin: "-0.2rem",
                    opacity: "1",
                  },
                }}
              >
                <RichTextEditor.Bold />
                <RichTextEditor.Italic />
                <RichTextEditor.Underline />
                <RichTextEditor.Strikethrough />
                <RichTextEditor.ClearFormatting />
                <RichTextEditor.ColorPicker
                  colors={[
                    "#25262b",
                    "#ffffff",
                    "#868e96",
                    "#fa5252",
                    "#e64980",
                    "#be4bdb",
                    "#7950f2",
                    "#4c6ef5",
                    "#228be6",
                    "#15aabf",
                    "#12b886",
                    "#40c057",
                    "#82c91e",
                    "#fab005",
                    "#fd7e14",
                  ]}
                />
                <RichTextEditor.Highlight />
                <RichTextEditor.Code />
                <RichTextEditor.H1 />
                <RichTextEditor.H2 />
                <RichTextEditor.H3 />
                <RichTextEditor.H4 />
              </RichTextEditor.ControlsGroup>
              <RichTextEditor.ControlsGroup
                styles={{
                  controlsGroup: {
                    margin: "-0.2rem",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <RichTextEditor.Blockquote />
                <RichTextEditor.Hr />
                <RichTextEditor.BulletList />
                <RichTextEditor.OrderedList />
                <RichTextEditor.Subscript />
                <RichTextEditor.Superscript />
                <RichTextEditor.Link />
                <RichTextEditor.Unlink />
                <RichTextEditor.AlignLeft />
                <RichTextEditor.AlignCenter />
                <RichTextEditor.AlignJustify />
                <RichTextEditor.AlignRight />
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content
              style={{ backgroundColor: "transparent" }}
            />
          </RichTextEditor>
        </ScrollArea>
      </InsideContainer>
      <Flex gap={6} justify={"end"}>
        <BtnSend
          labelBtn="Enviar Mensaje"
          description=""
          iconTag
          id={crypto.randomUUID()}
          title=""
          close={() => console.log("FromBtnSend")}
          key={crypto.randomUUID()}
        />
        <BtnPreview />
      </Flex>
    </Stack>
  );
};
