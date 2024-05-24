import { create } from "zustand";
import {
  AlarmFolderArray,
  AlarmCardArray,
  AlarmObj,
} from "@/interface/interface";
import {
  fakeAlarmDescription,
  alarmFolderArray,
  alarmDataArray,
} from "@/data/alarmData";

/* Functionalities of this section
  --> Folder Fn
    - Create an Folder
    - Delete an Folder
    - Update an Folder
    - Read an Folder
  --> Alarm Fn
    - Create an Alarm
    - Delete an Alarm
    - Update an Alarm
    - Read an Alarm
  --> General Functions
    
*/

interface AlarmStoreProps {
  // Fake properties
  alarmDescription: AlarmObj;
  alarmArray: AlarmCardArray[];
  alarmFolderArray: AlarmFolderArray[];
  showFolderLayout: boolean;
  showAlarmLayout: boolean;
  // Fake properties
  // -------------------- Functions --------------------
  fnSetFolderShow: (stateValue: boolean) => void;
  fnSetAlarmShow: (stateValue: boolean) => void;
  fnGetAlarm: (alarmId: string, folderName: string) => void;
  // ----------------------------------------------------------------
}

export const useAlarmStore = create<AlarmStoreProps>()((set, get) => {
  return {
    // Data
    alarmDescription: fakeAlarmDescription,
    alarmArray: alarmDataArray,
    alarmFolderArray: alarmFolderArray,
    showFolderLayout: false,
    showAlarmLayout: false,

    // ------------ Funtions to manipulate the data ------------
    fnSetFolderShow: (stateValue: boolean) =>
      set({
        showFolderLayout: stateValue,
      }),
    fnSetAlarmShow: (stateValue: boolean) =>
      set({
        showAlarmLayout: stateValue,
      }),
    // ------------ Funtions to manipulate the data ------------
    // Alarm Functions
    // Read alarm
    fnGetAlarm: (alarmId: string, folderName: string) => {
      const { alarmFolderArray } = get();
      const folderFound = alarmFolderArray.find(
        (folder) => folder.title === folderName,
      );
      if (folderFound) {
        const alarmFound = folderFound.alarmsArray.find(
          (alarm) => alarm.id === alarmId,
        );
        if (alarmFound) {
          set({
            alarmDescription: {
              toDate: alarmFound.toDate,
              createAt: alarmFound.createAt,
              id: alarmFound.id,
              automated: alarmFound.automated,
              description: alarmFound.description,
              createdTo: alarmFound.createdTo,
              folderAssigned: alarmFound.folderAssigned,
              privateAlarm: alarmFound.privateAlarm,
              privateUser: alarmFound.privateUser,
              alarmTitle: alarmFound.alarmTitle,
              icon: alarmFound.icon,
              folderIcon: folderFound.icon,
              color: folderFound.themeColor,
            },
          });
        }
      }
    },
  };
});

/*
set({
  alarmDescription: {
    id: alarmFound.id,
    automated: alarmFound.automated,
    description: alarmFound.description,
    color: folderFound?.themeColor,
    createAt: alarmFound.createAt,
    createdTo: alarmFound.createdTo,
    folderAssigned: alarmFound.folderAssigned,
    privateAlarm: alarmFound.privateAlarm,
    privateUser: alarmFound.privateUser,
    alarmTitle: alarmFound.alarmTitle,
    folderIcon: alarmFound.folderIcon,
    icon: alarmFound.icon
  },
});
*/
