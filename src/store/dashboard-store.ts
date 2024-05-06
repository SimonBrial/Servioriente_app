import { create } from "zustand";
import {
  DashboardProcessListItems,
  ChartSocialMedia,
  SocialMediaData,
  SocialMedia,
  ProcessedConversationItemProps,
  DonutChartDataProps,
  TaskListPerDaysProps,
} from "@/interface/interface";
import {
  chartSocialMediaData,
  dashboardProcessList,
  SocialMediaRed,
  tmrPerHour,
  tmrArray,
  mediaSocialArray,
  DonutChartData,
  TaskListData,
} from "@/data/dashboardDataFake";

/* Functionalities of this section
 */

interface DashobardStoreProps {
  // Fake properties
  processData: DashboardProcessListItems[];
  chartSocialMediaData: ChartSocialMedia[];
  TMRPerHour: SocialMediaData[];
  TMRData: SocialMediaData[];
  SocialMediaRedConversations: SocialMedia[];
  ProcessedConversationItems: ProcessedConversationItemProps[];
  DonutData: DonutChartDataProps[];
  rating: number;

  // Task Data
  TaskList: TaskListPerDaysProps[];

  // Fake properties

  // Functionalities
  avarageSocialMedia: () => number;
  // Secondary functions
}

export const useDashboardStore = create<DashobardStoreProps>()((set, get) => {
  return {
    // Data
    processData: dashboardProcessList,
    chartSocialMediaData: chartSocialMediaData,
    TMRData: tmrArray,
    TMRPerHour: tmrPerHour,
    SocialMediaRedConversations: SocialMediaRed, // "Redes Sociales" container
    ProcessedConversationItems: mediaSocialArray,
    DonutData: DonutChartData,
    TaskList: TaskListData,
    rating: 3.5,

    // Funtions to manipulate the data
    avarageSocialMedia: () => {
      const { SocialMediaRedConversations } = get();
      /* const arrayToAvarage: number[] = SocialMediaRedConversations.map(
        (socialMedia: SocialMedia) => socialMedia.rating,
      ); */
      const avarage = (
        SocialMediaRedConversations.map(
          (socialMedia: SocialMedia) => socialMedia.rating,
        ).reduce((acc, current) => acc + current, 0) / 3
      ).toFixed(2);
      /* set({
        rating: parseInt(avarage, 10),
      }); */
      return parseInt(avarage, 10);
    },

    // Secondary functions
  };
});
