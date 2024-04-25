type tagIcon =
  | "add-event"
  | "add-user"
  | "add-mail"
  | "format"
  | "folder"
  | "goal"
  | "add";

type processTitle =
  | "Espera"
  | "Generacion"
  | "Pagado"
  | "Entregado"
  | "Rechazado";

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

type SectionTypes =
  | "Configuracion"
  | "Recordatorios"
  | "Base de Datos"
  | "Dashboard"
  | "Calendario"
  | "Procesos"
  | "Metricas"
  | "Correos"
  | "Chats"
  | "User";

type MailStatus = "archived" | "favorites" | "read" | "notRead";

export type {
  NotificationsTypes,
  CardContainerHeader,
  NotificationType,
  EditButtonStyles,
  processTitle,
  SectionTypes,
  degreeType,
  MailStatus,
  labelType,
  cardSize,
  tagIcon,
};
