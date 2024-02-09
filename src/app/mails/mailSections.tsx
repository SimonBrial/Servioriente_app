import {
  HiOutlineDocumentText,
  IoMailUnreadOutline,
  HiOutlineTrash,
  HiOutlineSave,
  HiOutlineStar,
  BiMailSend,
} from "@/icons";

export const mailSections = [
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
