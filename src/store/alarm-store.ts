import { create } from "zustand";
import {
  AlarmFolderArray,
  AlarmCardArray,
  AlarmObj,
} from "@/interface/interface";
import { alarmFolderArray, alarmDataArray } from "@/data/alarmData";

/* Functionalities of this section
  --> Folder Fn
    ✅ Create an Folder
    ✅ Delete an Folder
    ✅ Update an Folder
    ✅ Read an Folder
  --> Alarm Fn
    - Create an Alarm
    ✅ Delete an Alarm
    - Update an Alarm
    ✅ Read an Alarm
  --> General Functions
    
*/

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
  folderToEdit: AlarmFolderArray | {};
  // Fake properties
  // -------------------- Functions --------------------
  // Alarm Functions
  fnSetAlarmShow: (stateValue: boolean) => void;
  fnSetEditAlarmShow: (stateValue: boolean) => void;
  fnDeleteAlarm: (alarmId: string, folderName: string) => void;
  fnDeleteAllAlarms: (folderName: string) => void;
  fnGetAlarm: (alarmId: string, folderName: string) => void;
  // Folder Functions
  fnGetFolder: (folderId: string) => void;
  fnSetFolderShow: (stateValue: boolean) => void;
  fnSetFolderToDeleteShow: (stateValue: boolean) => void;
  fnDeleteFolder: (folderId: string) => void;
  fnCreateFolder: (folderData: AlarmFolderArray) => Promise<void>;
  fnUpdateFolder: (
    folderId: string,
    folderData: AlarmFolderArray,
  ) => Promise<void>;
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
    folderToEdit: {},

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
              folderAssigned: alarmFound.folderAssigned,
              privateAlarm: alarmFound.privateAlarm,
              description: alarmFound.description,
              privateUser: alarmFound.privateUser,
              alarmTitle: alarmFound.alarmTitle,
              automated: alarmFound.automated,
              createdTo: alarmFound.createdTo,
              createAt: alarmFound.createAt,
              color: folderFound.themeColor,
              folderIcon: folderFound.icon,
              toDate: alarmFound.toDate,
              icon: alarmFound.icon,
              id: alarmFound.id,
            },
          });
        }
        return;
      }
      return null;
    },
    // Delete alarm by Id
    fnDeleteAlarm: (alarmId: string, folderName: string) => {
      const { alarmFolderArray } = get();
      const folderIndex = alarmFolderArray.findIndex(
        (folder) => folder.title === folderName,
      );
      if (folderIndex !== -1) {
        const alarmFound = alarmFolderArray[folderIndex].alarmsArray.filter(
          (alarm) => alarm.id !== alarmId,
        );
        const updatedFolder = {
          ...alarmFolderArray[folderIndex],
          alarmsArray: alarmFound,
        };
        set({
          alarmFolderArray: [
            ...alarmFolderArray.slice(0, folderIndex),
            updatedFolder,
            ...alarmFolderArray.slice(folderIndex + 1),
          ],
        });
      }
      console.log("Elemento no encontrado");
    },
    // Delete all alarms
    fnDeleteAllAlarms: (folderName: string) => {
      const { alarmFolderArray } = get();
      const folderIndex = alarmFolderArray.findIndex(
        (folder) => folder.title === folderName,
      );
      if (folderIndex !== -1) {
        const updatedFolder = {
          ...alarmFolderArray[folderIndex],
          alarmsArray: [],
        };
        set({
          alarmFolderArray: [
            ...alarmFolderArray.slice(0, folderIndex),
            updatedFolder,
            ...alarmFolderArray.slice(folderIndex + 1),
          ],
        });
      }
      console.log("Hubo un problema");
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
      set({ alarmFolderArray: folderFound });
    },
    fnCreateFolder: async (folderData: AlarmFolderArray) => {
      try {
        const { alarmFolderArray } = get();
        // TODO: I need to swear that constant is an instance of AlarmFolderArray
        const folderToCreate: AlarmFolderArray[] = [
          ...alarmFolderArray,
          folderData,
        ];
        await set({ alarmFolderArray: folderToCreate });
      } catch (err) {
        console.log(err);
      }
    },
    fnUpdateFolder: async (folderId: string, folderData: AlarmFolderArray) => {
      try {
        const { alarmFolderArray } = get();
        // Finding folder to update
        const folderIndex = alarmFolderArray.findIndex(
          (folder) => folder.idFolder === folderId,
        );
        if (folderIndex !== -1) {
          // Creating a copy of the currently data and updating the specified data
          const updateFolder = [...alarmFolderArray];
          updateFolder[folderIndex] = {
            ...updateFolder[folderIndex],
            ...folderData,
          };
          console.log("from fnUpdateFolder --> updateFolder: ", updateFolder);
          await set({ alarmFolderArray: updateFolder });
        }
      } catch (err) {
        console.log(err);
        set({ alarmFolderArray: alarmFolderArray });
      }
    },
  };
});
