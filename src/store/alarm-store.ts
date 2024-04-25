import { create } from "zustand";
import {
  AlarmCardArray,
  AlarmFolderArray,
  AlarmObj,
} from "@/interface/interface";
import {
  fakeAlarmDescription,
  alarmFolderArray,
  alarmDataArray,
} from "@/data/alarmData";

/* Functionalities of this section
 */

interface AlarmStoreProps {
  // Fake properties
  alarmDescription: AlarmObj;
  alarmArray: AlarmCardArray[];
  alarmFolderArray: AlarmFolderArray[];
  // Fake properties
  // Functionalities
}

export const useAlarmStore = create<AlarmStoreProps>()(() => {
  return {
    // Data
    alarmDescription: fakeAlarmDescription,
    alarmArray: alarmDataArray,
    alarmFolderArray: alarmFolderArray,

    // Funtions to manipulate the data
  };
});
