"use client";

import { RichTextEditor, Link } from "@mantine/tiptap";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Placeholder from "@tiptap/extension-placeholder";
import {
  ActionIcon,
  Button,
  Popover,
  useMantineColorScheme,
} from "@mantine/core";
import { Controller, Path } from "react-hook-form";
import { useCallback, useEffect } from "react";
import Image from "@tiptap/extension-image";
import { MdOutlineImage } from "@/icons";
import convertHtmlToString from "@/utils/convertHtmlToString";

interface TextEditorProps {
  // label: Path<any>;
  // control: any;
  // setDescription: (html: any) => any;
  // onUpdate: (content: string) => void;
  description: string;
  onEditorContent: (content: string) => void;
  errorDescription: string | undefined;
}

/* const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>'; */

/* <p>This is a basic example of implementing images. Drag to re-order.</p>
        <img src="https://placehold.co/800x400" />
        <img src="https://placehold.co/800x400/6A00F5/white" /> */
export default function TextEditor({
  errorDescription,
  onEditorContent,
  description,
}: // onUpdate,
// setDescription,
/* control,
  label, */
TextEditorProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  // console.log("description: ", convertHtmlToString(description));
  // console.log("description: ", convertHtmlToString(description).length);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Color,
      TextStyle,
      Highlight,
      Underline,
      TextAlign,
      Superscript,
      SubScript,
      Placeholder.configure({
        placeholder: "Aqui va la descripcion de la Plantilla",
      }),
    ],
    content: description,
    autofocus: false,
    onUpdate: ({ editor }) => {
      onEditorContent(editor.getHTML());
      // onUpdate(editor.getHTML());
    },
  });

  /* const handleEditor = () => {
    if (!editor) {
      return;
    }
    const html = editor.getHTML();
    onEditorContent(html);
  };

  useEffect(() => {
    if (!editor) {
      return;
    }
    // const html = editor.getHTML();
    onEditorContent(editor.getHTML());
  }, [description]); */

  // console.log(editor?.chain().focus());
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
    if (!editor) {
      return null;
    }
  }, [editor]);

  if (!editor) {
    return <></>;
  }

  if (errorDescription !== undefined) {
    const regex = /^<p><\/p>$/;
    console.log(regex.test(errorDescription))
  }

  return (
    <RichTextEditor
      // onError={(error) => console.log(error)}
      editor={editor}
      styles={(theme) => ({
        root: {
          backgroundColor: "transparent",
          borderColor: "transparent",
        },
        toolbar: {
          backgroundColor:
            colorScheme === "light"
              ? "#ffffff1a"
              : `${theme.colors.darkTheme[7]}`,
          borderBottom: "none",
          backdropFilter: "blur(5px)",
          top: "0",
          padding: "1rem",
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
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
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
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
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
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>

        {/* <RichTextEditor.ControlsGroup>
          <Popover
            width={300}
            trapFocus
            position="bottom"
            withArrow
            shadow="md"
          >
            <Popover.Target>
              <ActionIcon
                variant="outline"
                onClick={addImage}
                styles={(theme) => ({
                  root: {
                    height: "100%",
                    color: colorScheme === "light" ? "#7b7b7b" : "#fff",
                    borderColor: colorScheme === "light" ? "#ced4da" : "#fff",
                    backgroundColor:
                      colorScheme === "light" ? "#fff" : "#7b7b7b",
                  },
                })}
              >
                <MdOutlineImage />
              </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>Hi!</Popover.Dropdown>
          </Popover>
        </RichTextEditor.ControlsGroup> */}
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content style={{ backgroundColor: "transparent" }} />
    </RichTextEditor>
  );
}
{
  /* <Controller
      name={label}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        
      )}
    /> */
}
