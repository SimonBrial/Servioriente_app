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
  mailReceived: MailDataProps[];
  mailSent: MailDataProps[];
  mailFavorities: MailDataProps[];
  mailDeleted: MailDataProps[];
  mailTemplates: MailDataProps[];
  mailArchived: MailDataProps[];
  mailSectionArray: MailSections[];
  itemChecked: MailDataProps[];
  allMailsChecked: boolean;
  // Fake properties

  // Functionalities
  fnReadMark: (mailId: string, section: string) => void;
  fnFavorityMark: (mailId: string, section: string) => void;
  fnArchivedMark: (mailId: string, section: string) => void;
  fnDeleteMail: (mailId: string, section: string) => void;
  fnDeleteMailFromTrash: (mailId: string) => MailDataProps;
  fnCheckMail: (mailId: string, path: string, checked: boolean) => void;
  fnCheckAllMails: (path: string, checked: boolean) => void;
  fnDeleteMailChecked: (path: string) => void;
  fnCheckReadMails: (path: string, checked: boolean) => void;
  fnCheckNoReadMails: (path: string, checked: boolean) => void;
  // Secondary functions
  fnSelectData: (currentSection: string) => MailDataProps[] | undefined;
  // setMailGlobalStatus: (stateValue: boolean) => void;
}

export const useMailStore = create<MailStoreProps>()((set, get) => {
  return {
    // Data
    allMailsChecked: false,
    itemChecked: [],
    mailReceived: mailReceivedFake,
    mailSent: mailReceivedFake.slice(0, 4),
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

    // Funtions to manipulate the data
    fnReadMark: (mailId: string, section: string) => {
      const { fnSelectData } = get();
      const dataArray = fnSelectData(section); // Get the section's array currently
      if (dataArray) {
        const newMailReceivedArray = dataArray.map((mail) => {
          if (mail.idMail === mailId) {
            return { ...mail, mailRead: !mail.mailRead };
          }
          return { ...mail };
        });
        console.log("newMailReceivedArray: ", newMailReceivedArray);
        if (newMailReceivedArray !== undefined) {
          set({ mailReceived: newMailReceivedArray });
        }
      }
    },
    fnFavorityMark: (mailId: string, section: string) => {
      const { fnSelectData, mailFavorities } = get();
      const dataArray = fnSelectData(section); // Get the section's array currently
      if (dataArray) {
        const newMailFavorityArray = dataArray.map((mail) => {
          if (mail.idMail === mailId) {
            set({ mailFavorities: [...mailFavorities, mail] });
            return { ...mail, mailFavority: !mail.mailFavority };
          }
          return { ...mail };
        });
        console.log("newMailReceivedArray: ", newMailFavorityArray);
        if (newMailFavorityArray !== undefined) {
          set({ mailReceived: newMailFavorityArray });
        }
      }
    },
    fnArchivedMark: (mailId: string, section: string) => {
      const { fnSelectData, mailArchived } = get();
      const dataArray = fnSelectData(section); // Get the section's array currently
      if (dataArray) {
        const newMailArchivedArray = dataArray.map((mail) => {
          if (mail.idMail === mailId) {
            set({ mailFavorities: [...mailArchived, mail] });
            return { ...mail, mailArchived: !mail.mailArchived };
          }
          return { ...mail };
        });
        console.log("newMailReceivedArray: ", newMailArchivedArray);
        if (newMailArchivedArray !== undefined) {
          set({ mailReceived: newMailArchivedArray });
        }
      }
    },
    fnDeleteMail: (mailId: string, section: string) => {
      const { fnSelectData, mailDeleted, itemChecked } = get();
      const dataArray = fnSelectData(section);
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
        // console.log(newMailDelete);
        set({ mailReceived: [...newMailReceived] });
        set({ mailDeleted: [...mailDeleted, ...newMailDeleted] });
        //console.log(mailDeleted);
      }
    },
    fnDeleteMailFromTrash: (mailId: string) => {
      const { mailDeleted } = get();
      const mailToDeletedIndex = mailDeleted.findIndex(
        (mail) => mail.idMail === mailId,
      );
      return mailDeleted[mailToDeletedIndex];
    },
    fnSelectData: (currentSection: string): MailDataProps[] | undefined => {
      const {
        mailFavorities,
        mailTemplates,
        mailArchived,
        mailReceived,
        mailDeleted,
        mailSent,
      } = get();
      const mailSectionUrls = [
        {
          dataArr: mailReceived,
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
    fnCheckMail: (mailId: string, path: string, checked: boolean) => {
      const { itemChecked, fnSelectData } = get();
      const currentSectionArray = fnSelectData(path);
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
    fnCheckAllMails: (path: string, checked: boolean) => {
      // 1. Detecting the current section DONE
      // 2. Getting the corresponding array. DONE
      // 3. Adding the all elements to the itemChecked array DONE
      // NOTE: All elements should be indicated in the UI.
      const { fnSelectData } = get();
      const currentSectionArray = fnSelectData(path);
      if (currentSectionArray !== undefined) {
        set({ itemChecked: currentSectionArray, allMailsChecked: true });
      }
      if (!checked) {
        set({ itemChecked: [], allMailsChecked: false });
      }
    },
    fnCheckReadMails: (path: string, checked: boolean) => {
      const { fnSelectData } = get();
      const currentSectionArray = fnSelectData(path);
      if (currentSectionArray !== undefined) {
        // if the mail is read, it is will add to the itemChecked array
        const allReadMails = currentSectionArray.filter(
          (mail) => mail.mailRead,
        );
        console.log(allReadMails);
        set({ itemChecked: allReadMails, allMailsChecked: true });
      }
    },
    fnCheckNoReadMails: (path: string, checked: boolean) => {
      const { fnSelectData } = get();
      const currentSectionArray = fnSelectData(path);
      if (currentSectionArray !== undefined) {
        // if the mail is read, it is will add to the itemChecked array
        const allReadMails = currentSectionArray.filter(
          (mail) => !mail.mailRead,
        );
        console.log(allReadMails);
        set({ itemChecked: allReadMails, allMailsChecked: true });
      }
    },
    fnDeleteMailChecked: (path: string) => {
      const { itemChecked, mailDeleted, fnSelectData } = get();
      if (!path.includes("erased")) {
        // If item.dir !== path, the user isn't on the erased section
        // if itemChecked.length < currentSectionArray.length
        const currentSectionArray = fnSelectData(path);
        if (currentSectionArray !== undefined) {
          const newDeletedArray = currentSectionArray.filter(
            (element) =>
              !itemChecked.find((item) => item.idMail === element.idMail),
          );
          console.log(newDeletedArray);
          set({
            mailDeleted: [...mailDeleted, ...itemChecked],
            mailReceived: newDeletedArray,
          });
        }
      }
      if (itemChecked.length > 0) {
        set({ itemChecked: [] });
      }
    },
  };
});
