type tagIcon =
  | "add-event"
  | "add-user"
  | "add-mail"
  | "format"
  | "folder"
  | "goal"
  | "add";

type processTitle = "espera" | "generacion" | "pagado" | "entregado";

type NotificationType = "Aviso" | "Error" | "Completado" | "Informacion";

type EditButtonStyles = "normal" | "special" | "unstyled";

type CardContainerHeader = "whatsapp" | "instagram" | "facebook";

type NotificationsTypes = "Success" | "Warning" | "Error" | "Info";

type degreeType =
  | "Muy Importante"
  | "Importante"
  | "Normal"
  | "Nada Importante"
  | "Poco Importante";

type cardSize = "small" | "medium" | "large";

export type {
  NotificationsTypes,
  CardContainerHeader,
  NotificationType,
  EditButtonStyles,
  processTitle,
  degreeType,
  cardSize,
  tagIcon,
};
