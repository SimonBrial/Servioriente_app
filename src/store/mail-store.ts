import { create } from "zustand";
import { MailDataProps } from "@/interface/interface";
import { mailReceivedFake } from "@/data";

/* Functionalities of this section
 */
interface MailSections {
  dir: string;
  section: string;
}

interface MailStoreProps {
  // Fake properties
  mailGlobalArray: MailDataProps[];
  mailSent: MailDataProps[];
  mailFavorities: MailDataProps[];
  mailDeleted: MailDataProps[];
  mailTemplates: MailDataProps[];
  mailArchived: MailDataProps[];
  mailSectionArray: MailSections[];
  itemChecked: MailDataProps[];
  allMailsChecked: boolean;
  mailShow: MailDataProps | {};
  // Fake properties

  // Functionalities
  fnReadMark: (mailId: string, path: string) => void;
  fnFavoriteMark: (mailId: string, path: string, checked: boolean) => void;
  fnArchivedMark: (mailId: string, path: string) => void;
  fnDeleteMail: (mailId: string, path: string) => void;
  fnDeleteMailFromTrash: (mailId: string) => MailDataProps;
  fnCheckMail: (mailId: string, path: string, checked: boolean) => void;
  fnCheckAllMails: (path: string, checked: boolean) => void;
  fnDeleteMailChecked: (path: string) => void;
  fnCheckReadMails: (path: string, checked: boolean) => void;
  fnCheckNoReadMails: (path: string, checked: boolean) => void;
  // Secondary functions
  fnGetAllData: (path: string) => MailDataProps[] | undefined;
  fnGetData: (currentSection: string) => MailDataProps[] | undefined;
  fnGetFavorites: (
    path: string,
    mailsArray: MailDataProps[],
  ) => MailDataProps[] | undefined;
  fnGetArchived: (
    path: string,
    mailsArray: MailDataProps[],
  ) => MailDataProps[] | undefined;
  fnRecoverMail: (mailId: string) => void;
  fnShowMail: (mailId: string, path: string) => void;
  // setMailGlobalStatus: (stateValue: boolean) => void;
}

export const useMailStore = create<MailStoreProps>()((set, get) => {
  return {
    // Data
    allMailsChecked: false,
    itemChecked: [],
    mailGlobalArray: mailReceivedFake,
    mailSent: [],
    mailFavorities: [],
    mailDeleted: [],
    mailTemplates: [],
    mailArchived: [],
    mailSectionArray: [
      {
        dir: "/login/mails",
        section: "received",
      },
      {
        dir: "/login/mails/sent",
        section: "sent",
        dataArr: [],
      },
      {
        dir: "/login/mails/favorities",
        section: "favorities",
        dataArr: [],
      },
      {
        dir: "/login/mails/erased",
        section: "deleted",
        dataArr: [],
      },
      {
        dir: "/login/mails/formats",
        section: "templates",
        dataArr: [],
      },
      {
        dir: "/login/mails/archived",
        section: "archived",
        dataArr: [],
      },
    ],
    mailShow: {},

    // Funtions to manipulate the data
    fnReadMark: (mailId, path) => {
      const { fnGetData, mailGlobalArray } = get();
      const dataArray = fnGetData(path); // Get the section's array currently
      if (mailGlobalArray.length > 0) {
        const newMailReceivedArray = mailGlobalArray.map((mail) => {
          if (mail.idMail === mailId) {
            return { ...mail, mailRead: !mail.mailRead };
          }
          return { ...mail };
        });
        console.log("newMailReceivedArray: ", newMailReceivedArray);
        if (newMailReceivedArray !== undefined) {
          set({ mailGlobalArray: newMailReceivedArray });
        }
      }
    },
    fnFavoriteMark: (mailId, path, checked) => {
      const { mailFavorities, mailGlobalArray } = get();
      // const dataArray = fnGetData(path); // Get the section's array currently
      // Actualizar mailGlobalArray
      const newMailGlobalArray = mailGlobalArray.map((mail) => {
        if (mail.idMail === mailId) {
          // Si estamos en favoritos y checked es false, o si no estamos en favoritos
          if (
            !(path.includes("/mails/favorities") && !checked) ||
            path.includes("/mails/favorities")
          ) {
            return {
              ...mail,
              mailFavority: checked,
            };
          }
        }
        return mail;
      });

      // Filtrar para actualizar mailFavorities
      const newMailFavorities = newMailGlobalArray.filter(
        (mail) => mail.mailFavority,
      );

      // Actualizar el estado con los nuevos arrays
      set({
        mailGlobalArray: newMailGlobalArray,
        mailFavorities: newMailFavorities,
      });
    },
    fnArchivedMark: (mailId, path) => {
      const { mailArchived, mailGlobalArray } = get();
      if (mailGlobalArray.length > 0) {
        const newMailArchivedArray = mailGlobalArray.map((mail) => {
          if (mail.idMail === mailId) {
            if (
              !path.includes("/mails/archived") ||
              path.includes("/mails/archived")
            ) {
              return {
                ...mail,
                mailArchived: !mail.mailArchived,
              };
            }
            set({ mailArchived: [...mailArchived, mail] });
            return { ...mail, mailArchived: !mail.mailArchived };
          }
          return { ...mail };
        });
        console.log("newMailReceivedArray: ", newMailArchivedArray);
        if (newMailArchivedArray !== undefined) {
          set({ mailGlobalArray: newMailArchivedArray });
        }
      }
    },
    fnDeleteMail: (mailId, path) => {
      const { fnGetData, mailDeleted, itemChecked, mailShow } = get();
      const dataArray = fnGetData(path);
      // Looking for if the element is in the itemChecked array.
      if (dataArray) {
        const newMailDeleted = dataArray.filter(
          (mail) => mail.idMail === mailId,
        );

        if (newMailDeleted !== undefined) {
          const deletedFromItemChecked = itemChecked.filter(
            (mail) => mail.idMail !== mailId,
          );
          set({ itemChecked: deletedFromItemChecked });
        }
        const newMailReceived = dataArray.filter(
          (mail) => mail.idMail !== mailId,
        );
        if (mailShow && (mailShow as MailDataProps).idMail === mailId) {
          set({ mailShow: {} });
        }
        if (path.includes("erased")) {
          set({ mailShow: mailShow });
        }

        // console.log(newMailDelete);
        set({
          mailGlobalArray: [...newMailReceived],
          mailDeleted: [...mailDeleted, ...newMailDeleted],
        });
        //console.log(mailDeleted);
      }
    },
    fnDeleteMailFromTrash: (mailId) => {
      const { mailDeleted } = get();
      const mailToDeletedIndex = mailDeleted.findIndex(
        (mail) => mail.idMail === mailId,
      );
      return mailDeleted[mailToDeletedIndex];
    },
    fnGetAllData: (path) => {
      const {
        mailSectionArray,
        mailGlobalArray,
        fnGetFavorites,
        fnGetArchived,
        mailTemplates,
        mailDeleted,
        mailSent,
      } = get();
      const currentSection = mailSectionArray.find(
        (section) => section.dir === path,
      );
      if (currentSection !== undefined) {
        // const currentSectionArray = fnGetData(path);
        if (path === "/login/mails") {
          return mailGlobalArray;
        }
        if (path.includes("favorities")) {
          return fnGetFavorites(path, mailGlobalArray);
        }
        if (path.includes("archived")) {
          return fnGetArchived(path, mailGlobalArray);
        }
        if (path.includes("erased")) {
          return mailDeleted;
        }
        if (path.includes("sent")) {
          return mailSent;
        }
        if (path.includes("formats")) {
          return mailTemplates;
        }
      }
    },
    fnGetData: (currentSection): MailDataProps[] | undefined => {
      const {
        mailGlobalArray,
        mailFavorities,
        mailTemplates,
        mailArchived,
        mailDeleted,
        mailSent,
      } = get();
      const mailSectionUrls = [
        {
          dataArr: mailGlobalArray,
          dir: "/login/mails",
        },
        {
          dataArr: mailSent,
          dir: "/login/mails/sent",
        },
        {
          dataArr: mailFavorities,
          dir: "/login/mails/favorities",
        },
        {
          dataArr: mailDeleted,
          dir: "/login/mails/erased",
        },
        {
          dataArr: mailTemplates,
          dir: "/login/mails/formats",
        },
        {
          dataArr: mailArchived,
          dir: "/login/mails/archived",
        },
      ];
      const dataMailFounded = mailSectionUrls.find(
        (section) => section.dir === currentSection,
      );
      return dataMailFounded?.dataArr;
    },
    fnGetFavorites: (path, mailsArray) => {
      // In this function I'm going to implmented a filter to show only the mail with the favorite property in true
      if (path.includes("/login/mails/favorities")) {
        if (mailsArray !== undefined) {
          const mailsFavorites = mailsArray.filter((mail) => mail.mailFavority);
          console.log(mailsFavorites);
          return mailsFavorites;
        }
      }
    },
    fnGetArchived: (path, mailsArray) => {
      // In this function I'm going to implmented a filter to show only the mail with the favorite property in true
      if (path.includes("archived")) {
        if (mailsArray !== undefined) {
          const mailsArchived = mailsArray.filter((mail) => mail.mailArchived);
          return mailsArchived;
        }
      }
      // return mailsArray;
    },
    fnRecoverMail: (mailId) => {
      const { mailDeleted, mailGlobalArray } = get();
      // console.log("mailDeleted: ", mailDeleted);
      const mailFound = mailDeleted.filter((mail) => mail.idMail === mailId);
      const restArrayDeleted = mailDeleted.filter(
        (mail) => mail.idMail !== mailId,
      );
      // console.log(mailFound);
      if (mailFound !== undefined) {
        // console.log(restArrayDeleted);
        mailGlobalArray.unshift(mailFound[0]);
        set({ mailDeleted: restArrayDeleted });
        set({ mailGlobalArray });
      }
    },
    fnCheckMail: (mailId, path, checked) => {
      const { itemChecked, fnGetData } = get();
      const currentSectionArray = fnGetData(path);
      // search the element by id
      if (currentSectionArray !== undefined) {
        // If the checkbox value is TRUE
        if (!checked) {
          // if the element was found and not it's undefined
          const elementAdded = currentSectionArray.find(
            (element) => element.idMail === mailId,
          );

          if (
            elementAdded !== undefined &&
            !itemChecked.some((e) => e.idMail === mailId)
          ) {
            set({ itemChecked: [...itemChecked, elementAdded] });
          }
        } else {
          // If the checkbox value is FALSE
          const removeElement = itemChecked.filter(
            (element) => element.idMail !== mailId,
          );
          set({ itemChecked: removeElement });
        }
      }
    },
    fnCheckAllMails: (path, checked) => {
      // 1. Detecting the current section DONE
      // 2. Getting the corresponding array. DONE
      // 3. Adding the all elements to the itemChecked array DONE
      // NOTE: All elements should be indicated in the UI.
      const { fnGetData } = get();
      const currentSectionArray = fnGetData(path);
      if (currentSectionArray !== undefined) {
        set({ itemChecked: currentSectionArray, allMailsChecked: true });
      }
      if (!checked) {
        set({ itemChecked: [], allMailsChecked: false });
      }
    },
    fnCheckReadMails: (path, checked) => {
      const { fnGetData, mailGlobalArray } = get();
      const currentSectionArray = fnGetData(path);
      if (mailGlobalArray.length > 0) {
        // if the mail is read, it is will add to the itemChecked array
        const allReadMails = mailGlobalArray.filter(
          (mail) => mail.mailRead,
        );
        console.log(allReadMails);
        set({ itemChecked: allReadMails/* , allMailsChecked: true */ });
      }
    },
    fnCheckNoReadMails: (path, checked) => {
      const { fnGetData } = get();
      const currentSectionArray = fnGetData(path);
      if (currentSectionArray !== undefined) {
        // if the mail is read, it is will add to the itemChecked array
        const allReadMails = currentSectionArray.filter(
          (mail) => !mail.mailRead,
        );
        console.log(allReadMails);
        set({ itemChecked: allReadMails, allMailsChecked: true });
      }
    },
    fnDeleteMailChecked: (path) => {
      const { itemChecked, mailDeleted, fnGetData } = get();
      if (!path.includes("erased")) {
        // If item.dir !== path, the user isn't on the erased section
        // if itemChecked.length < currentSectionArray.length
        const currentSectionArray = fnGetData(path);
        if (currentSectionArray !== undefined) {
          const newDeletedArray = currentSectionArray.filter(
            (element) =>
              !itemChecked.find((item) => item.idMail === element.idMail),
          );
          console.log(newDeletedArray);
          set({
            mailDeleted: [...mailDeleted, ...itemChecked],
            mailGlobalArray: newDeletedArray,
          });
        }
      }
      if (itemChecked.length > 0) {
        set({ itemChecked: [] });
      }
    },
    fnShowMail: (mailId, path) => {
      const { fnGetAllData } = get();
      const currentSectionArray = fnGetAllData(path);
      if (currentSectionArray !== undefined) {
        // console.log("mailId: ", mailId);
        const mailSelected = currentSectionArray.find(
          (mail) => mail.idMail === mailId,
        );
        if (mailSelected !== undefined) {
          // console.log(mailSelected);
          set({ mailShow: mailSelected });
        }
        // set({ mailShow: {} });
      }
    },
  };
});
