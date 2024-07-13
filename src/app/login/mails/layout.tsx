import TabsNavigation from "@/components/TabsNavigation";
import {
  HiOutlineDocumentText,
  IoMailUnreadOutline,
  HiOutlineTrash,
  HiOutlineSave,
  HiOutlineStar,
  BiMailSend,
} from "@/icons";
import AutoCompleteFilterContainer from "@/components/container/AutoCompleteFilterContainer";
import InsideContainer from "@/components/container/InsideContainer";
import ListLayout from "../data-base/layout";

export default function MailLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const mailSections = [
    { value: "Recibidos", icon: <IoMailUnreadOutline />, dir: "/login/mails" },
    { value: "Enviados", icon: <BiMailSend />, dir: "/login/mails/sent" },
    /* {
      value: "Plantillas",
      icon: <HiOutlineDocumentText />,
      dir: "/login/mails/formats",
    }, */
    {
      value: "Favoritos",
      icon: <HiOutlineStar />,
      dir: "/login/mails/favorities",
    },
    { value: "Papelera", icon: <HiOutlineTrash />, dir: "/login/mails/erased" },
    {
      value: "Archivados",
      icon: <HiOutlineSave />,
      dir: "/login/mails/archived",
    },
  ];

  return (
    <ListLayout>
      <TabsNavigation sectionsArray={mailSections} orientation />
      <AutoCompleteFilterContainer
        label={["correo@correo.com", "correo2@correo.com"]}
      />
      <InsideContainer
        offset={155}
        withBackground={false}
        withBorder={false}
        key={crypto.randomUUID()}
      >
        {children}
      </InsideContainer>
    </ListLayout>
  );
}
