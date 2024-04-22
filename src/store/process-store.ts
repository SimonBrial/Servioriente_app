import { dataFakeCard } from "@/data/initialCards";
import { CardProcessProps, DNDType } from "@/interface/interface";
import { UniqueIdentifier } from "@dnd-kit/core";
import { create } from "zustand";

interface ProcessStoreProps {
  data: DNDType[];
  deleteCard: (id: UniqueIdentifier, columnId: string) => void;
}

export const useProcessStore = create<ProcessStoreProps>()((set, get) => {
  return {
    // Data
    data: dataFakeCard,

    // Funtions to manipulate the data
    deleteCard: (id: UniqueIdentifier, columnId: string) => {
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
  };
});
