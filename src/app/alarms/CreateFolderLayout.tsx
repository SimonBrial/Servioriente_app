import ColorSelectInput from "@/components/inputs/ColorSelectInput";
import { MdOutlineInsertEmoticon, MdTitle } from "@/icons";
import TextEditor from "@/components/TextEditor";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { ScrollArea, Stack } from "@mantine/core";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";

export default function CreateFolderLayout({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <ScrollArea offsetScrollbars scrollbarSize={2} scrollHideDelay={500}>
      <Stack
        gap={"0.4rem"}
        styles={{
          root: { padding: "0 0.2rem" },
        }}
      >
        <TitleLayout title={title} color="" icon="" onText={false} />
        <HorizontalInputLayout
          title="Titulo"
          icon={<MdTitle />}
          inputSize="200px"
          asterisk={false}
        />
        <HorizontalInputLayout
          title="Icono"
          icon={<MdOutlineInsertEmoticon />}
          inputSize="200px"
          asterisk={false}
        />
        <ColorSelectInput />
        <TextEditor />
      </Stack>
    </ScrollArea>
  );
}
