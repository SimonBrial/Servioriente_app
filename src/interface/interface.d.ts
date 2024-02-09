/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
import { type ReactNode } from "react";
import {
  type tagIcon,
  CardContainerHeader,
  NotificationType,
  degreeType,
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
  label: string;
  direction: string;
}

interface iconList {
  tag: tagIcon;
  icon: ReactNode;
}

interface BtnAddProps {
  iconTag: tagIcon;
  label: string;
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
interface CardProcessProps {
  /* dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
  draggableProps: DraggableProvidedDraggableProps;
  innerRef: (element: HTMLElement | null) => void; // HTMLElement | LegacyRef<HTMLDivElement> */
  clientName: string;
  columnId: string;
  vehicle: string;
  date: string;
  tag: number;
  id: string;
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
  title: NotificationType;
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

interface BtnActionProps {
  title: string;
  icon: React.ReactNode;
  close: () => void;
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
  title: string;
  desription: string;
  degree: degreeType;
  userToassign: string;
  id: string;
  smallSize: boolean;
}

interface EventCardData {
  title: string;
  desription: string;
  degree: degreeType;
  userToassign: string;
  id: string;
}

export type {
  NotificationIconsProps,
  CardChatContainerProps,
  HorizontalLayoutProps,
  CardProcessItemProps,
  CountIndicatorProps,
  TabsSectionesProps,
  colorBackgroundArr,
  NotitifacionProps,
  RegisterInfoProps,
  BoardSectionProps,
  SortableItemProps,
  AutoCompleteData,
  TitleLayoutProps,
  CardProcessProps,
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
  BtnAddProps,
  AlarmProps,
  CardProps,
  ReturnFn,
  AlarmObj,
  iconList,
};
