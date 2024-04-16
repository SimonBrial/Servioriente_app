import ColorSelectInput from "@/components/inputs/ColorSelectInput";
import { MdOutlineInsertEmoticon, MdTitle } from "@/icons";
import TextEditor from "@/components/TextEditor";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { ScrollArea, Stack } from "@mantine/core";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { ContainerInside } from "@/components/container/ContainerInside";
import heightClasses from "@/styles/height-view.module.css";

export default function CreateFolderLayout({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
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
      <ContainerInside
        allWhite
        width="100%"
        withBorder
        key={crypto.randomUUID()}
      >
        <ScrollArea
          scrollbarSize={2}
          p={0}
          className={heightClasses.createFolder_scroll_container}
        >
          <TextEditor />
        </ScrollArea>
      </ContainerInside>
    </Stack>
  );
}
