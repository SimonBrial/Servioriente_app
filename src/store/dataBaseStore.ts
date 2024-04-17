import { create } from "zustand";
import { listDB } from "@/data/ListDB";
import { ListDBProps } from "@/interface/interface";

/* Functionalities of this section
  --> User Register Fn
    - Create an user
    ✅ Delete an user
    - Update an user
    - Read an user
  --> General Functions
    - Apply filter by name, last name, whatever...
    - Delete filter that was apply it
    - Generate an report ---> This is a global functionality, so must be in another hook, but is important remember it!
      NOTE: This must has a counter or any register scheme to internal use.
    - Search for name or any input value that user type in the search input field
    - Pagination functionality
  --> Functions that must be in the Table's component
    - Order by ascending or descending column's values, it's just for the columne: "Name", "Last Name", "Vehicle", "Place" and "Status"
*/

interface DataBaseStoreProps {
  data: ListDBProps[];
  deleteUser: (id: string) => void;
}

export const dataBaseStore = create<DataBaseStoreProps>()((set, get) => {
  return {
    // Data
    data: listDB,

    // Funtion to manipulate the data
    deleteUser: (id) => {
      const { data } = get();
      const newData = data.filter((d) => d.id !== id);
      set({ data: newData });
    },
  };
});
