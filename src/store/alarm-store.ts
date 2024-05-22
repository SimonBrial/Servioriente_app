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
  showFolderLayout: boolean;
  // Fake properties
  // Functionalities
  fnSetFolderShow: (stateValue: boolean) => void;
}

export const useAlarmStore = create<AlarmStoreProps>()((set, get) => {
  return {
    // Data
    alarmDescription: fakeAlarmDescription,
    alarmArray: alarmDataArray,
    alarmFolderArray: alarmFolderArray,
    showFolderLayout: false,

    // Funtions to manipulate the data
    fnSetFolderShow: (stateValue: boolean) =>
      set({
        showFolderLayout: stateValue,
      }),
  };
});
