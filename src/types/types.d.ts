type tagIcon =
  | "add-event"
  | "add-user"
  | "add-mail"
  | "format"
  | "folder"
  | "goal"
  | "add";

type processTitle = "Espera" | "Generacion" | "Pagado" | "Entregado" | "Rechazado";

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

type cardSize = "small" | "medium" | "big";

type labelType = "Super Admin" | "Admin";

export type {
  NotificationsTypes,
  CardContainerHeader,
  NotificationType,
  EditButtonStyles,
  processTitle,
  degreeType,
  labelType,
  cardSize,
  tagIcon,
};
