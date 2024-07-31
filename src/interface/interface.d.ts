/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
import { type ReactNode } from "react";
import { MantineColor } from "@mantine/core";
import { UniqueIdentifier } from "@dnd-kit/core";
import {
  type tagIcon,
  CardContainerHeader,
  NotificationType,
  EditButtonStyles,
  processTitle,
  SectionTypes,
  degreeType,
  MailStatus,
  cardSize,
} from "../types/types";
import { Path, UseFormRegister } from "react-hook-form";

interface NavIconProps {
  icon: ReactNode;
  dir: string;
  active?: boolean;
  label: string;
  onClick?: () => void;
}

interface sidebarItems {
  icon: ReactNode;
  label: SectionTypes;
  direction: string;
}

interface iconList {
  tag: tagIcon;
  icon: ReactNode;
}

interface BtnAddProps extends NotificationsFnProps {
  iconTag: tagIcon;
  label: string;
  labelBtn: string;
  fnShow: (state: boolean) => void;
  children: ReactNode;
  showDrawer: boolean;
}

interface TitleLayoutProps {
  title: string;
  icon?: string;
  color?: string;
  onText: boolean;
}

interface AlarmProps {
  objAlarm: TitleLayoutObj;
}

interface AlarmObj {
  id: string;
  alarmTitle: string;
  icon?: string;
  folderIcon?: string;
  color?: string;
  createAt: Date; // Date
  createdTo: string;
  toDate: Date; // Date
  privateAlarm: boolean;
  privateUser: string;
  description: string;
  automated: boolean;
  folderAssigned: string;
}

interface AlarmCardArray {
  id: string;
  title: string;
  createdAt: string;
  createHour: string;
  forDate: string;
  forHour: string;
  description: string;
  automated: boolean;
  privated: boolean;
  folderAssigned: string;
}

interface CardProcessItemProps {
  direction: string;
  vehicle: string;
  date: string;
  tag: number;
}

interface DNDType {
  id: UniqueIdentifier;
  title: string | processTitle;
  items: CardProcessProps[];
}
interface CardProcessProps {
  id: UniqueIdentifier;
  clientName: string;
  columnId: string;
  vehicle: string;
  date: date; // Creation Date
  tag: number;
}
interface RCVPrice {
  NSeats: number | string;
  LCapacity: number;
  CValue: number;
  services: boolean[];
}

interface ClientRegisterProcessProps extends CardProcessProps {
  id: string | UniqueIdentifier;
  phonePost: string | number;
  typeStatus: processTitle;
  birthday?: date | string;
  instagram?: string;
  firstName: string;
  facebook?: string;
  lastName: string;
  phonePre: string;
  vehicle: string;
  carID: string;
  state: string;
  mail?: string;
  tag: RCVPrice;

  // [key: string]: any;
}

interface CardProps {
  cardItem: CardProcessProps;
  colorCard: string;
}

interface ColumnSection {
  [name: string]: CardProcessProps[];
}

interface CountIndicatorProps {
  count: number;
  iconSection: ReactNode;
  description: string;
}

interface TaskItemProps {
  card: CardProcessProps;
}

interface BoardSectionProps {
  id: string;
  title: string;
  tasks: CardProcessProps[];
}

interface SortableItemProps {
  children: ReactNode;
  id: string;
}

interface NotificationIconsProps {
  title: string;
  type: NotificationType;
  description: string;
  children: React.ReactNode;
}

interface RegisterInfoProps {
  keyInput: string;
  valueInput: string | JSX.Element | undefined | Date;
}

interface TabsSectionesProps {
  value: string;
  icon: React.ReactNode;
  dir: string;
}

interface SectionsArray {
  sectionsArray: TabsSectionesProps[];
  orientation: boolean;
}

interface BtnActionProps extends NotificationsFnProps {
  labelBtn: string;
  title: string;
  icon: React.ReactNode;
  close: () => void;
}
interface BtnDeleteProps extends NotificationsFnProps {
  labelBtn: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}
interface BtnEditProps {
  id: string;
  children: React.ReactNode;
  buttonStyles: EditButtonStyles;
  fnShowEditLayout: (valueState: boolean) => void;
  editLayout: boolean;
}
interface AutoCompleteData {
  label: string | string[];
}

interface HorizontalLayoutProps {
  asterisk: boolean;
  errorDescription: string | undefined;
  title: string;
  inputSize: string;
  icon: React.ReactNode;
  label: Path<any>;
  required: boolean;
  min: number;
  max: number;
  register: UseFormRegister<any>;
  control: any;
  valueToEdit?: string;
}

interface StateSelectProps {
  errorDescription: string | undefined;
  asterisk: boolean;
  inputSize: string;
  label: Path<any>;
  required: boolean;
  min: number;
  max: number;
  register: UseFormRegister<any>;
  control: any;
}

interface verticalInput {
  label: string;
  icon?: React.ReactNode;
}

interface CardChatContainerProps {
  header: CardContainerHeader;
}

interface colorBackgroundArr {
  type: NotificationsTypes;
  colorStr: string;
  icon: React.ReactNode;
}

interface ReturnFn {
  colorStr: string;
  icon: React.ReactNode;
}

interface NotitifacionProps {
  // icon: React.ReactNode;
  type: NotificationsTypes;
  title: string;
  description: string;
  close: () => void;
}

interface EventCardProps {
  userToassign: string;
  desription: string;
  degree: degreeType;
  cardSize: cardSize;
  title: string;
  id: string;
  date: Date;
}

interface EventCardData {
  title: string;
  desription: string;
  degree: degreeType;
  userToassign: string;
  id: string;
}

interface DashboardProcessListItems {
  process: string | processTitle;
  processTitle: string;
  yesterday: number;
  today: number;
  id: UniqueIdentifier | string;
}

interface SocialMedia {
  title: CardContainerHeader;
  rating: number;
  id: string;
}

interface SocialMediaData {
  _id: string;
  date: string;
  Instagram: number | null;
  Facebook: number | null;
  Whatsapp: number | null;
}

interface ChartSocialMedia {
  id: string;
  date: string;
  Instagram: string | number;
  Facebook: string | number;
  Whatsapp: string | number;
}

interface ProcessedConversationItemProps {
  id: string;
  // socialMediaIcon: React.ReactNode;
  iconName: CardContainerHeader;
  totalConversations: number;
}

interface DonutChartDataProps {
  name: string;
  currentValue: number;
  goal: number;
}

interface EventsArray {
  date: Date;
  title: string;
  degree: degreeType;
}

/* interface EventCardProps {
  title: string;
  desription: string;
  degree: degreeType;
  userToassign: string;
} */

interface SmallEventCardProps {
  title: string;
  degree: degreeType;
  date: Date;
}
interface NotificationsFnProps {
  color: MantineColor | string;
  icon?: React.ReactNode;
  description: string;
  loading?: boolean;
  classes?: string;
  title: string;
  id: string;
}

interface ListDBProps {
  id: string; // Auto generated ✅
  firstName: string; // required ✅
  lastName: string; // required ✅
  vehicle: string; // required ✅
  carID: string; // required ✅
  state: string; // required ✅
  phonePre: string; // required ✅
  phonePost: string | number; // required ✅
  typeStatus: processTitle; // required ✅
  mail?: string; // ✅
  birthday?: string | Date;
  facebook?: string; // ✅
  instagram?: string; // ✅
  [key: string]: any;
}

interface DefaultFiltersValueProps {
  id: string;
  label: any;
}

interface AlarmFolderArray {
  idFolder: string;
  title: string;
  icon: string;
  alarmsArray: AlarmObj[];
  themeColor: string;
  description: string;
}

interface MailDataProps {
  idMail: string;
  userName: string;
  mail: string | string[];
  title: string;
  description: string;
  date: Date;
  photo?: string;
  mailRead: boolean;
  mailFavorite: boolean;
  mailArchive: boolean;
  docs?: File | File[];
  // mailStatus: MailStatus;
}

interface MailSelectedArray {
  dataArr: MailDataProps[];
  dir: string;
}

interface MailTemplateProps {
  id: string;
  title: string;
  shortDescription: string;
  bodyDescription: string;
  createdAt: Date;
  updatedAt: Date;
  userCreatedAt: string;
  userUpdatedAt: string;
  templateFavorite: boolean;
}

interface TaskDayCardProps {
  idTask: string;
  title: string;
  description: string;
  degree: degreeType;
  userToassign: string;
  admin: boolean;
}

interface TaskListPerDaysProps {
  id: string;
  dateTitle: string;
  taskToday: TaskDayCardProps[];
}

interface DifusionListItemProps {
  id: string | number;
  photo?: string;
  favorite: boolean;
  userName: string;
  contactDescription: string;
}

interface FormatCardProps {
  id: string;
  title: string;
  userCreator: string;
  date: Date;
  description: string;
}

// ---------------------------- Metrics Data Interface ------------------------------------
interface DayItem {
  value: number | string;
  label: Date;
}

interface MonthItems {
  month: string;
  avarageMonth: number;
  day?: DayItem[];
}

interface DataArrayProps {
  id: string;
  item: MonthItems[];
}

interface DataProps {
  title: string;
  id: string;
  dataArray: DataArrayProps[];
}
// ---------------------------- Metrics Data Interface ------------------------------------

export type {
  ProcessedConversationItemProps,
  ClientRegisterProcessProps,
  DashboardProcessListItems,
  DefaultFiltersValueProps,
  NotificationIconsProps,
  CardChatContainerProps,
  DifusionListItemProps,
  HorizontalLayoutProps,
  TaskListPerDaysProps,
  NotificationsFnProps,
  CardProcessItemProps,
  CountIndicatorProps,
  SmallEventCardProps,
  DonutChartDataProps,
  TabsSectionesProps,
  colorBackgroundArr,
  MailSelectedArray,
  NotitifacionProps,
  RegisterInfoProps,
  BoardSectionProps,
  MailTemplateProps,
  SortableItemProps,
  AlarmFolderArray,
  StateSelectProps,
  AutoCompleteData,
  TaskDayCardProps,
  TitleLayoutProps,
  CardProcessProps,
  ChartSocialMedia,
  FormatCardProps,
  SocialMediaData,
  BtnDeleteProps,
  EventCardProps,
  BtnActionProps,
  AlarmCardArray,
  DataArrayProps,
  MailDataProps,
  EventCardData,
  SectionsArray,
  ColumnSection,
  TaskItemProps,
  verticalInput,
  NavIconProps,
  sidebarItems,
  BtnEditProps,
  ListDBProps,
  SocialMedia,
  EventsArray,
  BtnAddProps,
  MonthItems,
  AlarmProps,
  DataProps,
  CardProps,
  ReturnFn,
  AlarmObj,
  iconList,
  DayItem,
  DNDType,
};
