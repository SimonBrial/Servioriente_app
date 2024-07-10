import { create } from "zustand";
import { MailDataProps, MailTemplateProps } from "@/interface/interface";
import { mailReceivedFake, mailTemplateFake } from "@/data/mailData";

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
  mailTemplates: MailTemplateProps[];
  mailTemplatesFavorites: MailTemplateProps[];
  mailTemplatesDeleted: MailTemplateProps[];
  mailArchived: MailDataProps[];
  mailSectionArray: MailSections[];
  itemChecked: MailDataProps[];
  allMailsChecked: boolean;
  mailShow: MailDataProps | MailTemplateProps | {};
  closeMailDescription: boolean;
  // Fake properties

  // Functionalities
  fnReadMark: (mailId: string, path: string) => void;
  fnFavoriteMark: (mailId: string, path: string, checked: boolean) => void;
  fnArchivedMark: (mailId: string, path: string) => void;
  fnArchivedAllMails: () => void;
  fnFavoriteAllMails: () => void;
  fnReadAllMails: () => void;
  fnNotReadAllMails: () => void;
  fnDeleteMail: (mailId: string, path: string) => void;
  fnDeleteMailFromTrash: (mailId: string) => MailDataProps;
  fnCheckMail: (mailId: string, path: string, checked: boolean) => void;
  fnCheckAllMails: (path: string, checked: boolean) => void;
  fnDeleteMailChecked: (path: string) => void;
  fnCheckReadMails: (path: string, checked: boolean) => void;
  fnCheckNoReadMails: (path: string, checked: boolean) => void;
  fnFavoriteMarkTemplate: (mailId: string) => void;
  fnGetFavoritiesTemplate: () => MailTemplateProps[];
  fnGetDeletedTemplate: () => MailTemplateProps[];
  fnDeleteTemplate: (mailId: string) => void;
  fnGetAllTemplates: (path: string) => void;
  // Secondary functions
  fnGetAllData: (
    path: string,
  ) => MailDataProps[] | MailTemplateProps[] | undefined;
  fnGetData: (
    currentSection: string,
  ) => MailDataProps[] | MailTemplateProps[] | undefined;
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
  setMailDescription: (stateValue: boolean) => void;
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
    mailTemplates: mailTemplateFake,
    mailTemplatesFavorites: [],
    mailTemplatesDeleted: [],
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
    closeMailDescription: false,

    // Funtions to manipulate the data
    setMailDescription: (stateValue) => {
      set({ closeMailDescription: stateValue });
    },
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
              mailFavorite: checked,
            };
          }
        }
        return mail;
      });

      // Filtrar para actualizar mailFavorities
      const newMailFavorities = newMailGlobalArray.filter(
        (mail) => mail.mailFavorite,
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
        const newMailGlobalArray = mailGlobalArray.map((mail) => {
          if (mail.idMail === mailId) {
            if (
              !path.includes("/mails/archived") ||
              path.includes("/mails/archived")
            ) {
              return {
                ...mail,
                mailArchive: !mail.mailArchive,
              };
            }
            console.log(mail);
            console.log("mailArchived: ", mailArchived);
            // set({ mailArchived: [...mailArchived, mail] });
            return { ...mail, mailArchive: !mail.mailArchive };
          }
          return { ...mail };
        });

        // Filtrar para actualizar mailArchived
        const newMailArchived = newMailGlobalArray.filter(
          (mail) => mail.mailArchive,
        );
        console.log("newMailReceivedArray: ", newMailGlobalArray);
        if (newMailGlobalArray !== undefined) {
          set({
            mailGlobalArray: newMailGlobalArray,
            mailArchived: newMailArchived,
          });
        }
      }
    },
    fnArchivedAllMails: () => {
      const { mailGlobalArray } = get();
      if (mailGlobalArray.length > 0) {
        const newMailArchivedArray = mailGlobalArray.map((mail) => {
          return {
            ...mail,
            mailArchive: true,
          };
        });
        set({ mailGlobalArray: newMailArchivedArray });
      }
    },
    fnFavoriteAllMails: () => {
      const { mailGlobalArray } = get();
      if (mailGlobalArray.length > 0) {
        const newMailFavoriteArray = mailGlobalArray.map((mail) => {
          return {
            ...mail,
            mailFavorite: true,
          };
        });
        set({ mailGlobalArray: newMailFavoriteArray });
      }
    },
    fnNotReadAllMails: () => {
      const { mailGlobalArray } = get();
      if (mailGlobalArray.length > 0) {
        const newMailNotReadArray = mailGlobalArray.map((mail) => {
          return {
            ...mail,
            mailRead: false,
          };
        });
        set({ mailGlobalArray: newMailNotReadArray });
      }
    },
    fnReadAllMails: () => {
      const { mailGlobalArray } = get();
      if (mailGlobalArray.length > 0) {
        const newMailReadArray = mailGlobalArray.map((mail) => {
          return {
            ...mail,
            mailRead: true,
          };
        });
        set({ mailGlobalArray: newMailReadArray });
      }
    },
    fnDeleteMail: (mailId, path) => {
      const { fnGetData, mailDeleted, itemChecked, mailShow } = get();
      const dataArray = fnGetData(path);
      // Looking for if the element is in the itemChecked array.
      if (dataArray) {
        const newMailDeleted = dataArray.filter(
          (mail) => (mail as MailDataProps).idMail === mailId,
        ) as MailDataProps[];
        if (newMailDeleted !== undefined) {
          const deletedFromItemChecked = itemChecked.filter(
            (mail) => mail.idMail !== mailId,
          );
          set({ itemChecked: deletedFromItemChecked });
        }
        const newMailReceived = dataArray.filter(
          (mail) => (mail as MailDataProps).idMail !== mailId,
        ) as MailDataProps[];
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
      const { mailDeleted, fnGetFavoritiesTemplate } = get();
      const mailToDeletedIndex = mailDeleted.findIndex(
        (mail) => mail.idMail === mailId,
      );
      return mailDeleted[mailToDeletedIndex];
    },
    fnGetAllData: (path) => {
      //console.log("path: ", path);
      const {
        fnGetFavoritiesTemplate,
        fnGetDeletedTemplate,
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
      // console.log(currentSection);
      if (currentSection) {
        if (path === "/login/mails") {
          set({ mailGlobalArray: mailGlobalArray });
          return mailGlobalArray;
        }
        if (path.includes("favorities")) {
          return fnGetFavorites(path, mailGlobalArray);
        }
        if (path.includes("archived")) {
          const archived = fnGetArchived(path, mailGlobalArray);
          if (archived) {
            set({ mailArchived: archived });
            return archived;
          }
          return [];
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
      // Specific urls
      if (path.includes("formats/favorites")) {
        return fnGetFavoritiesTemplate();
      }
      if (path.includes("formats/deleted")) {
        return fnGetDeletedTemplate();
      }
      return [];
    },
    fnGetData: (
      currentSection,
    ): MailDataProps[] | MailTemplateProps[] | undefined => {
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
      // In this function I'm going to implement a filter to show only the mail with the favorite property in true
      if (path.includes("/login/mails/favorities")) {
        if (mailsArray !== undefined) {
          const mailsFavorites = mailsArray.filter((mail) => mail.mailFavorite);
          console.log(mailsFavorites);
          return mailsFavorites;
        }
      }
    },
    fnGetArchived: (path, mailsArray) => {
      // In this function I'm going to implemented a filter to show only the mail with the favorite property in true
      if (path.includes("archived")) {
        if (mailsArray !== undefined) {
          const mailsArchived = mailsArray.filter((mail) => mail.mailArchive);
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
            (element) => (element as MailDataProps).idMail === mailId,
          ) as MailDataProps;

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
      const currentSectionArray = fnGetData(path) as MailDataProps[];
      if (currentSectionArray !== undefined) {
        set({ itemChecked: currentSectionArray, allMailsChecked: true });
      }
      if (!checked) {
        set({ itemChecked: [], allMailsChecked: false });
      }
    },
    fnCheckReadMails: (path, checked) => {
      const { fnGetData, mailGlobalArray } = get();
      /* const currentSectionArray = fnGetData(path); */
      if (mailGlobalArray.length > 0) {
        // if the mail is read, it is will add to the itemChecked array
        const allReadMails = mailGlobalArray.filter((mail) => mail.mailRead);
        console.log(allReadMails);
        set({ itemChecked: allReadMails /* , allMailsChecked: true */ });
      }
    },
    fnCheckNoReadMails: (path, checked) => {
      const { fnGetData, mailGlobalArray } = get();
      /* const currentSectionArray = fnGetData(path); */
      if (mailGlobalArray.length > 0) {
        // if the mail is read, it is will add to the itemChecked array
        const allReadMails = mailGlobalArray.filter((mail) => !mail.mailRead);
        console.log(allReadMails);
        set({ itemChecked: allReadMails, allMailsChecked: true });
      }
    },
    fnFavoriteMarkTemplate: (mailId) => {
      const { mailTemplates } = get();
      const newTemplatesArray = mailTemplates.map((mail) => {
        if ((mail as MailTemplateProps).id === mailId) {
          return {
            ...mail,
            templateFavorite: !(mail as MailTemplateProps).templateFavorite,
          };
        }
        return mail;
      });
      console.log("newTemplatesArray: ", newTemplatesArray);
      set({ mailTemplates: newTemplatesArray });
    },
    fnGetFavoritiesTemplate: () => {
      const { mailTemplates } = get();

      const newFavoritiesTemplateArray: MailTemplateProps[] =
        mailTemplates.filter(
          (mail) => (mail as MailTemplateProps).templateFavorite,
        );
      // console.log("showFavoritiesTemplate: ", showFavoritiesTemplate);
      set({ mailTemplatesFavorites: newFavoritiesTemplateArray });
      return newFavoritiesTemplateArray;
    },
    fnGetDeletedTemplate: () => {
      const { mailTemplatesDeleted } = get();
      // const newDeletedTemplateArray: MailTemplateProps[];

      if (mailTemplatesDeleted.length > 0) {
        return mailTemplatesDeleted;
      }
      return [];
    },
    fnDeleteTemplate: (mailId) => {
      const { mailTemplates, mailTemplatesDeleted } = get();

      const templateToDeleted = mailTemplates.find(
        (mail) => mail.id === mailId,
      );

      if (templateToDeleted) {
        set({
          mailTemplatesDeleted: [...mailTemplatesDeleted, templateToDeleted],
        });
      }

      const newTemplateArray = mailTemplates.filter(
        (mail) => mail.id !== mailId,
      );
      set({ mailTemplates: newTemplateArray });
    },
    fnGetAllTemplates: (path) => {
      const { mailTemplates, fnGetAllData } = get();
      console.log("mailTemplates: ", mailTemplates);
      const dataToShow = fnGetAllData(path);
      if (dataToShow !== undefined) {
        console.log("mailTemplates: ", mailTemplates);
        console.log("dataToShow: ", dataToShow);
        set({ mailTemplates: dataToShow as MailTemplateProps[] });
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
              !itemChecked.find(
                (item) => item.idMail === (element as MailDataProps).idMail,
              ),
          ) as MailDataProps[];
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
      if (currentSectionArray !== undefined && !path.includes("formats")) {
        // console.log("mailId: ", mailId);
        const mailSelected = currentSectionArray.find(
          (mail) => (mail as MailDataProps).idMail === mailId,
        ) as MailDataProps;
        if (mailSelected === undefined) {
          // console.log(mailSelected);
          set({ mailShow: {} });
        }
        set({ mailShow: mailSelected, closeMailDescription: false });
      }
      if (path.includes("formats") && currentSectionArray !== undefined) {
        const mailSelected = currentSectionArray.find(
          (mail) => (mail as MailTemplateProps).id === mailId,
        ) as MailTemplateProps;
        if (mailSelected === undefined) {
          // console.log(mailSelected);
          set({ mailShow: {} });
        }
        set({ mailShow: mailSelected, closeMailDescription: false });
      }
    },
  };
});
