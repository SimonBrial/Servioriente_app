import TextEditor from "@/components/TextEditor";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { ScrollArea, Title } from "@mantine/core";
import heightClasses from "@/styles/height-view.module.css";
import { ContainerInside } from "@/components/container/ContainerInside";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { HiOutlineMail, MdOutlineTitle } from "@/icons";

export default function NewEmailLayout() {
  return (
    <>
      <TitleLayout
        color=""
        icon=""
        onText
        title="Crear Nuevo Correo"
        key={crypto.randomUUID()}
      />

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
      <Title order={5}>Agregar Descripcion</Title>

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
