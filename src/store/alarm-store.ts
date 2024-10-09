import { create } from "zustand";
import {
  AlarmFolderArray,
  AlarmCardArray,
  AlarmObj,
} from "@/interface/interface";
import { alarmDataArray, alarmFolderArray } from "@/data/AlarmData";

/* Functionalities of this section
  --> Folder Fn
    ✅ Create an Folder
    ✅ Delete an Folder
    ✅ Update an Folder
    ✅ Read an Folder
  --> Alarm Fn
    ✅ Create an Alarm
    ✅ Delete an Alarm
    ✅ Update an Alarm
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
  showFolderToDelete: boolean;
  searchTerm: string;
  results: any[];
  closeDescription: boolean;
  // Fake properties
  // -------------------- Functions --------------------

  setSearchTerm: (term: string) => void;
  setResults: (results: any[]) => void;
  setCloseDescription: (stateValue: boolean) => void;
  // Alarm Functions
  fnSetAlarmShow: (stateValue: boolean) => void;
  fnSetEditAlarmShow: (stateValue: boolean) => void;
  fnGetAlarm: (alarmId: string, folderName: string) => void;
  fnDeleteAlarm: (alarmId: string, folderName: string) => void;
  fnDeleteAllAlarms: (folderName: string) => void;
  fnCreateAlarm: (newAlarm: AlarmObj, folderName: string) => void;
  fnUpdateAlarm: (
    alarmData: AlarmObj,
    oldFolderName: string,
    newFolderName: string,
    alarmId: string,
  ) => Promise<void>;
  // Folder Functions
  fnGetFolder: (folderId: string) => void;
  fnGetfolderByName: (folderName: string) => AlarmFolderArray | null;
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
    searchTerm: "",
    results: [],
    closeDescription: false,

    // ------------ Funtions to manipulate the data ------------
    setSearchTerm: (term: string) => set({ searchTerm: term }),
    setResults: (results: any[]) => set({ results }),
    setCloseDescription: (stateValue: boolean) =>
      set({ closeDescription: stateValue }),
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
    // TODO: Must be implemented!!!
    fnDeleteAllAlarms: (folderId: string) => {
      const { alarmFolderArray } = get();
      const folderIndex = alarmFolderArray.findIndex(
        (folder) => folder.idFolder === folderId,
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
    // Create Alarm
    fnCreateAlarm: async (newAlarm: AlarmObj, folderName: string) => {
      try {
        console.log("From alarm-store: ", newAlarm);
        const { alarmFolderArray } = get();
        const folderIndex = alarmFolderArray.findIndex(
          (folder) => folder.title === folderName,
        );

        if (folderIndex !== -1) {
          // console.log(folderIndex);
          // console.log(newAlarm);
          alarmFolderArray[folderIndex].alarmsArray.push(newAlarm);

          /* console.log(updateFolder.push(newAlarm));
          console.log(alarmFolderArray); */
          // console.log(alarmFolderArray);
          set({ alarmFolderArray });
        }
      } catch (err) {
        console.log(err);
      }
    },
    // Update alarm
    fnUpdateAlarm: async (
      alarmData: AlarmObj,
      oldFolderName: string,
      newFolderName: string,
      alarmId: string,
    ) => {
      const { alarmFolderArray, fnGetfolderByName } = get();
      // Search the folder by name
      // const test = fnGetfolderByName(newFolderName);
      // console.log("oldFolderName: ", oldFolderName);
      // console.log("newFolderName: ", newFolderName);
      // Encuentra el índice de la carpeta antigua y la nueva
      const oldFolderIndex = alarmFolderArray.findIndex(
        (folder) => folder.title === oldFolderName,
      );
      const newFolderIndex = alarmFolderArray.findIndex(
        (folder) => folder.title === newFolderName,
      );

      if (oldFolderIndex !== -1 && newFolderIndex !== -1) {
        // Encuentra el índice de la alarma en la carpeta antigua
        const alarmIndex = alarmFolderArray[
          oldFolderIndex
        ].alarmsArray.findIndex((alarm) => alarm.id === alarmId);

        if (alarmIndex !== -1) {
          // Elimina la alarma de la carpeta antigua
          const [removedAlarm] = alarmFolderArray[
            oldFolderIndex
          ].alarmsArray.splice(alarmIndex, 1);

          // Actualiza la alarma si es necesario
          const updatedAlarm = { ...removedAlarm, ...alarmData };

          // Añade la alarma actualizada a la nueva carpeta pero en la ultima posición
          alarmFolderArray[newFolderIndex].alarmsArray.unshift(updatedAlarm);

          // Actualiza el estado o la variable que contiene alarmFolderArray
          // console.log("alarmFolderArray: ", alarmFolderArray);
          await set({ alarmFolderArray });
        }
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
    // Get Folder by Name
    fnGetfolderByName: (name: string): AlarmFolderArray | null => {
      const { alarmFolderArray } = get();
      const folderFound = alarmFolderArray.find(
        (folder) => folder.title === name,
      );
      if (folderFound) {
        return folderFound;
      }
      return null;
    },
    // Delete Folder
    fnDeleteFolder: (id: string) => {
      const { alarmFolderArray } = get();
      const folderFound = alarmFolderArray.filter(
        (folder) => id !== folder.idFolder,
      );
      set({ alarmFolderArray: folderFound });
    },
    // Create Folder
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
    // Update Folder
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
          // console.log("from fnUpdateFolder --> updateFolder: ", updateFolder);
          await set({ alarmFolderArray: updateFolder });
        }
      } catch (err) {
        console.log(err);
        set({ alarmFolderArray: alarmFolderArray });
      }
    },
  };
});
