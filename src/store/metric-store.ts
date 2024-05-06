import { MetricsDataFake } from "@/data";
import { DataProps } from "@/interface/interface";
import { create } from "zustand";

/* Functionalities of this section
 */

interface MetricStoreProps {
  // Fake properties
  goalsArray: DataProps[];
  // salesArray: DataProps[];
  // Fake properties
  // Functionalities
}

export const useMetricStore = create<MetricStoreProps>()(() => {
  return {
    // Data
    goalsArray: MetricsDataFake,
    // salesArray: MetricsDataFake,
    // Funtions to manipulate the data
  };
});
