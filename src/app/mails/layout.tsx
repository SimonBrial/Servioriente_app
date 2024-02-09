import TabsNavigation from "@/components/TabsNavigation";
import ListLayout from "../data-base/layout";
import {
  HiOutlineDocumentText,
  IoMailUnreadOutline,
  HiOutlineTrash,
  HiOutlineSave,
  HiOutlineStar,
  BiMailSend,
} from "../../icons";
import AutoCompleteFilterContainer from "@/components/container/AutoCompleteFilterContainer";
import InsideContainer from "@/components/container/InsideContainer";

export default function MailLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const mailSections = [
    { value: "Recibidos", icon: <IoMailUnreadOutline />, dir: "/mails" },
    { value: "Enviados", icon: <BiMailSend />, dir: "/mails/sent" },
    {
      value: "Favoritos",
      icon: <HiOutlineStar />,
      dir: "/mails/favorities",
    },
    { value: "Borrados", icon: <HiOutlineTrash />, dir: "/mails/erased" },
    {
      value: "Plantillas",
      icon: <HiOutlineDocumentText />,
      dir: "/mails/formats",
    },
    {
      value: "Archivados",
      icon: <HiOutlineSave />,
      dir: "/mails/archived",
    },
  ];

  return (
    <ListLayout>
      <TabsNavigation sectionsArray={mailSections} orientation />
      <AutoCompleteFilterContainer
        label={["correo@correo.com", "correo2@correo.com"]}
      />
      <InsideContainer offset={155}>{children}</InsideContainer>
    </ListLayout>
  );
}
