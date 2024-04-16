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
  cardSize,
} from "../types/types";

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
  addFn?: () => void;
  children: ReactNode;
}

interface TitleLayoutProps {
  title: string;
  icon: string;
  color: string;
  onText: boolean;
}

interface AlarmProps {
  objAlarm: TitleLayoutObj;
}

interface AlarmObj {
  id: string;
  title: string;
  icon?: string;
  color: string;
  createAt: string;
  createdTo: string;
  privateAlarm: boolean;
  privateUser: string;
  description: string;
  automated: boolean;
}

interface AlarmCardProps {
  id: string;
  title: string;
  createdAt: string;
  createHour: string;
  forDate: string;
  forHour: string;
  description: string;
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
  date: string;
  tag: number;
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
  valueInput: string | JSX.Element;
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
  // closeFn: () => void;
}
interface BtnEditProps extends NotificationsFnProps {
  labelBtn: string;
  title: string;
  // icon: React.ReactNode;
  children: React.ReactNode;
  buttonStyles: EditButtonStyles;
  // closeFn: () => void;
}
interface AutoCompleteData {
  label: string | string[];
}

interface HorizontalLayoutProps {
  asterisk: boolean;
  title: string;
  inputSize: string;
  icon: React.ReactNode;
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

interface socialMediaData {
  _id: string;
  date: string;
  Instagram: number | null;
  Facebook: number | null;
  Whatsapp: number | null;
}

interface ProcessedConversationItemProps {
  id: string;
  socialMediaIcon: React.ReactNode;
  iconName: CardContainerHeader;
  totalConversations: number;
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

export type {
  ProcessedConversationItemProps,
  DashboardProcessListItems,
  NotificationIconsProps,
  CardChatContainerProps,
  HorizontalLayoutProps,
  NotificationsFnProps,
  CardProcessItemProps,
  CountIndicatorProps,
  SmallEventCardProps,
  TabsSectionesProps,
  colorBackgroundArr,
  NotitifacionProps,
  RegisterInfoProps,
  BoardSectionProps,
  SortableItemProps,
  AutoCompleteData,
  TitleLayoutProps,
  CardProcessProps,
  socialMediaData,
  BtnDeleteProps,
  EventCardProps,
  BtnActionProps,
  AlarmCardProps,
  EventCardData,
  SectionsArray,
  ColumnSection,
  TaskItemProps,
  verticalInput,
  NavIconProps,
  sidebarItems,
  BtnEditProps,
  SocialMedia,
  EventsArray,
  BtnAddProps,
  AlarmProps,
  CardProps,
  ReturnFn,
  AlarmObj,
  iconList,
  DNDType,
};
