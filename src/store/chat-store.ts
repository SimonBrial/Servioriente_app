import { difusionArray } from "@/data";
import { formatsArray } from "@/data/chatsDatafake";
import { DifusionListItemProps, FormatCardProps } from "@/interface/interface";
import { create } from "zustand";

/* Functionalities of this section
 */

interface ChatStoreProps {
  // Fake properties
  difusionArray: DifusionListItemProps[];
  notReadArray: DifusionListItemProps[];
  favoritiesArray: DifusionListItemProps[];
  templateArray: FormatCardProps[];
  // Fake properties
  // Functionalities
}

export const useChatStore = create<ChatStoreProps>()(() => {
  return {
    // Data
    difusionArray: difusionArray,
    notReadArray: difusionArray,
    favoritiesArray: difusionArray,
    templateArray: formatsArray,
    // Funtions to manipulate the data
  };
});
