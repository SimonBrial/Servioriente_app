import { dataFakeCard } from "@/data/initialCards";
import { CardProcessProps, DNDType, ListDBProps } from "@/interface/interface";
import { UniqueIdentifier } from "@dnd-kit/core";
import { create } from "zustand";

interface ProcessStoreProps {
  data: DNDType[];
  dataShow: DNDType | {};
  showClientLayout: boolean;
  showRegisterDescription: boolean;
  fnDeleteCard: (id: UniqueIdentifier, columnId: string) => void;
  fnShowDescription: (
    id: UniqueIdentifier | string,
    dataArray: ListDBProps[],
  ) => void;
  fnSearchRegister: (term: string, dataArray: ListDBProps[]) => ListDBProps[];
  fnGetRcvById: (
    id: UniqueIdentifier | string,
    columnId: string,
  ) => CardProcessProps | {};
  setShowCreateClient: (show: boolean) => void;
  setShowRegisterDescription: (show: boolean) => void;
}

export const useProcessStore = create<ProcessStoreProps>()((set, get) => {
  return {
    // Data
    data: dataFakeCard,
    dataShow: {},
    showClientLayout: false,
    showRegisterDescription: false,

    setShowCreateClient: (show: boolean) => {
      set({ showClientLayout: show });
    },
    setShowRegisterDescription: (value: boolean) => {
      set({ showRegisterDescription: value });
    },
    // Funtions to manipulate the data
    fnDeleteCard: (id, columnId) => {
      const { data } = get();
      // ✅ 1. Click on the card
      // ✅ 2. Find the column where is that card
      // ✅ 3. Pass to cross the components the columnId and id props
      // ✅ 4. Find the column where is that card
      // ✅ 5. Read the cards array from the column where they are
      // ✅ 6. Delete card selected
      // 7. Push the modified array to the column where it was
      // 8. end the new data array to the component for show it

      // Point 4
      const columnFound = data.filter(
        (c) => c.title.toLowerCase() !== columnId,
      );
      const columnIndex = data.findIndex(
        (c) => c.title.toLowerCase() === columnId,
      );
      // Point 5 and 6
      const columnCards: CardProcessProps[] = data[columnIndex].items.filter(
        (item) => item.id !== id,
      );
      /* console.log(`${columnFound[columnIndex].title}: `, columnCards);
      console.log([
        ...columnFound,
        {
          id: data[columnIndex].id,
          title: data[columnIndex].title,
          items: columnCards,
        },
      ]); */

      set({
        data: [
          ...columnFound,
          {
            id: data[columnIndex].id,
            title: data[columnIndex].title,
            items: columnCards,
          },
        ],
      });
    },
    fnShowDescription: (id, dataArray) => {
      // Searching element by id
      const userFound = dataArray.find((user) => user.id === id);
      // User was found
      if (userFound) {
        console.log(userFound);
        return set({ dataShow: userFound, showRegisterDescription: true });
      }
      console.log("Doesn't exist");
      set({ dataShow: {} });
    },
    fnSearchRegister: (term: string, dataArray: ListDBProps[]) => {
      console.log(term);
      // console.log(dataArray);
      if (dataArray.length > 0) {
        const filteredData = dataArray.filter((user) => {
          if (
            user.firstName.toLowerCase().includes(term.toLowerCase()) ||
            user.lastName.toLowerCase().includes(term.toLowerCase())
          ) {
            return user;
          }
        });
        if (filteredData.length > 0) {
          console.log("filteredData: ", filteredData);
          return filteredData;
        }
        // return {};
      }
      return dataArray;
    },
    fnGetRcvById: (id, columnId) => {
      const { data } = get();
      // console.log("From process store ---> columnId: ", columnId);
      // console.log("From process store ---> ID: ", id);
      const columnFound = data.find(
        (column) => column.title.toLowerCase() === columnId.toLowerCase(),
      );
      if (columnFound) {
        const rcvFound = columnFound.items.find((rcv) => rcv.id === id);
        if (rcvFound) {
          return rcvFound;
        }
      }
      return {}
    },
  };
});
/* "Sucedio un problema con la busque, vuelva a seleccionar la RCV para mostrar su descripcion."; */
