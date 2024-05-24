/* eslint-disable @typescript-eslint/await-thenable */
import { create } from "zustand";
import { listDB } from "@/data/ListDB";
import { ListDBProps } from "@/interface/interface";

/* Functionalities of this section
  --> User Register Fn
    ✅ Create an user
    ✅ Delete an user
    ✅ Update an user
    ✅ Read an user
  --> General Functions
    ✅ Apply filter by name, last name, whatever...
    ✅ Delete filter that was apply it
    ✅ Generate an report ---> This is a global functionality, so must be in another hook, but is important remember it!
      NOTE: This must has a counter or any register scheme to internal use.
    ✅ Search for name or any input value that user type in the search input field
    - Pagination functionality
  --> Functions that must be in the Table's component
    - Order by ascending or descending column's values, it's just for the columne: "Name", "Last Name", "Vehicle", "Place" and "Status"
*/

interface DataBaseStoreProps {
  data: ListDBProps[]; // Global data Array
  dataToShow: ListDBProps[]; // Element to show
  dataToDelete: ListDBProps[]; // Element to delete
  dataToEdit: ListDBProps[]; // Element to edit
  showRegisterLayout: boolean; // It's just a boolean value
  showEditLayout: boolean; // It's just a boolean value
  filterFields: string[]; //
  defaultFiltersValue: string[]; //
  // -------------------- Functions --------------------
  fnDeleteUser: (id: string) => void; // Delete an user by ID
  fnGetUser: (id: string) => void; // Get an user by ID
  // fnUserToEdit: (id: string) => void; // Edit an user by ID
  fnUpdateData: (id: string, newData: ListDBProps[]) => Promise<void>; // Edit an user by ID
  fnCreateUser: (newUser: ListDBProps) => Promise<void>; // Create an user register in the DB
  fnSetShow: (stateValue: boolean) => void;
  fnSetShowEdit: (stateValue: boolean) => void;
  // ----------------------------------------------------------------
  searchTerm: string;
  results: any[];
  setSearchTerm: (term: string) => void;
  setResults: (results: any[]) => void;
  fnSetField: (fields: string[]) => void;
  fnDeletePillFilter: (id: string) => void;
  fnDeleteAllPillFilter: () => void;
}

export const useDataBaseStore = create<DataBaseStoreProps>()((set, get) => {
  return {
    // Data
    data: listDB,
    dataToShow: [],
    dataToDelete: [],
    dataToEdit: [],
    showRegisterLayout: false,
    showEditLayout: false,
    searchTerm: "",
    results: [],
    filterFields: [],
    defaultFiltersValue: [
      "nombre",
      "apellido",
      "vehiculo",
      "placa",
      "estado",
      "telefono",
      "correo",
      "status",
      "cumpleaños",
      "facebook",
      "instagram",
    ],
    // Funtions to manipulate the data
    fnSetShow: (stateValue: boolean) =>
      set({
        showRegisterLayout: stateValue,
      }),
    fnSetShowEdit: (stateValue: boolean) =>
      set({
        showEditLayout: stateValue,
      }),
    fnDeleteUser: (id) => {
      const { data } = get();
      const newData = data.filter((d) => d.id !== id);
      const showUserToDelete = data.find((d) => d.id === id);
      set({
        data: newData,
        dataToDelete: showUserToDelete ? [showUserToDelete] : [],
      });
    },
    fnGetUser: (id: string) => {
      const { data } = get();
      const foundUser = data.find((user) => user.id === id);
      set({ dataToShow: foundUser ? [foundUser] : [] });
      return foundUser;
    },
    fnUpdateData: async (id: string, newData: ListDBProps[]) => {
      const { data } = get();

      // Find the index of the user that going to be updated
      const userIndex = data.findIndex((user) => user.id === id);

      // Find user in the data array
      if (userIndex !== -1) {
        // Creating a copy of the currently data and updating the specified data
        const updatedData = [...data];
        updatedData[userIndex] = {
          ...updatedData[userIndex],
          ...newData[0],
        };

        // Updating the data arrat with the new data
        await set({ data: updatedData });
      } else {
        set({ data: data });
      }
    },
    fnCreateUser: async (newUser: ListDBProps) => {
      try {
        const { data } = get();
        const userData = [...data, newUser];
        await set({ data: userData });
      } catch (error) {
        console.log(error);
      }
    },
    setSearchTerm: (term: string) => set({ searchTerm: term }),
    setResults: (results: any[]) => set({ results }),
    fnSetField: (fields: string[]) => set({ filterFields: fields }),
    fnDeletePillFilter: (id: string) => {
      const { filterFields } = get();
      const activeFields: string[] = filterFields.filter(
        (field) => field !== id.toLowerCase(),
      );

      set({ filterFields: activeFields });
    },
    fnDeleteAllPillFilter: () => set({ filterFields: [] }),
  };
});
