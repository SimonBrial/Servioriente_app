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

type descriptionObj = {
  
} | {}

interface AlarmStoreProps {
  // Fake properties
  alarmDescription: AlarmObj | {};
  alarmArray: AlarmCardArray[];
  alarmFolderArray: AlarmFolderArray[];
  showFolderLayout: boolean;
  showAlarmLayout: boolean;
  showEditAlarmLayout: boolean;
  folderToDelete: AlarmFolderArray[] | [];
  showFolderToDelete: boolean;
  // Fake properties
  // -------------------- Functions --------------------
  fnSetFolderShow: (stateValue: boolean) => void;
  fnSetAlarmShow: (stateValue: boolean) => void;
  fnSetFolderToDeleteShow: (stateValue: boolean) => void;
  fnSetEditAlarmShow: (stateValue: boolean) => void;
  fnGetAlarm: (alarmId: string, folderName: string) => void;
  fnDeleteAlarm: (alarmId: string, folderName: string) => void;
  fnDeleteFolder: (folderId: string) => void;
  fnGetFolder: (folderId: string) => void;
  // ----------------------------------------------------------------
}

export const useAlarmStore = create<AlarmStoreProps>()((set, get) => {
  return {
    // Data
    alarmDescription: {},
    alarmArray: alarmDataArray,
    alarmFolderArray: alarmFolderArray,
    showFolderLayout: false,
    showFolderToDelete: false,
    showAlarmLayout: false,
    showEditAlarmLayout: false,
    folderToDelete: [],

    // ------------ Funtions to manipulate the data ------------
    fnSetFolderShow: (stateValue: boolean) =>
      set({
        showFolderLayout: stateValue,
      }),
    fnSetFolderToDeleteShow: (stateValue: boolean) =>
      set({
        showFolderToDelete: stateValue,
      }),
    fnSetAlarmShow: (stateValue: boolean) =>
      set({
        showAlarmLayout: stateValue,
      }),
    fnSetEditAlarmShow: (stateValue: boolean) =>
      set({
        showEditAlarmLayout: stateValue,
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
    // Delete alarm
    fnDeleteAlarm: (alarmId: string, folderName: string) => {
      const { alarmFolderArray } = get();
      const folderFound = alarmFolderArray.find(
        (folder) => folder.title === folderName,
      );
      if (folderFound) {
        const alarmFound = folderFound.alarmsArray.filter(
          (alarm) => alarm.id !== alarmId,
        );
        console.log(alarmFound);
      }
    },
    // Folder Functions
    // Read Folder
    fnGetFolder: (id: string) => {
      const { alarmFolderArray } = get();
      const folderFound = alarmFolderArray.find(
        (folder) => folder.idFolder === id,
      );
      // console.log(folderFound);
      if (folderFound) {
        return folderFound;
      }
      return [];
    },
    // Delete Folder
    fnDeleteFolder: (id: string) => {
      const { alarmFolderArray } = get();
      const folderFound = alarmFolderArray.filter(
        (folder) => id !== folder.idFolder,
      );
      set({alarmFolderArray: folderFound})
    },
  };
});
