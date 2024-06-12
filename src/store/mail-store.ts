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
  mailGlobalStaus: boolean;
  // Fake properties

  // Functionalities
  fnReadMark: (mailId: string, section: string) => void;
  fnDeleteMail: (mailId: string, section: string) => void;
  fnDeleteMailFromTrash: (mailId: string) => MailDataProps;
  fnCheckMail: (mailId: string, path: string, checked: boolean) => void;
  fnDeleteMailChecked: (path: string) => void;
  // Secondary functions
  fnSelectData: (currentSection: string) => MailDataProps[] | undefined;
  // setMailGlobalStatus: (stateValue: boolean) => void;
}

export const useMailStore = create<MailStoreProps>()((set, get) => {
  return {
    // Data
    mailGlobalStaus: false,
    itemChecked: [],
    mailReceived: mailReceivedFake,
    mailSent: mailReceivedFake.slice(0, 4),
    mailFavorities: mailReceivedFake.slice(0, 5),
    mailDeleted: /* mailReceivedFake.slice(0, 2) */ [],
    mailTemplates: mailReceivedFake.slice(0, 3),
    mailArchived: mailReceivedFake.slice(0, 1),
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
      const dataArray = fnSelectData(section);
      if (dataArray) {
        const mailFounded = dataArray.find((mail) => mail.idMail === mailId);
        if (mailFounded) {
          console.log("mailFounded: ", mailFounded);
          mailFounded.mailRead = !mailFounded.mailRead;
          console.log("mailFounded: ", mailFounded);
          console.log("Was read it");
          console.log(mailFounded.mailRead);
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
          set({ mailGlobalStaus: true });
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
    // Received mails

    // Secondary functions
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

      /* if (elementAdded !== undefined && itemChecked.length > 1) {
        // Is the element in the array?
        const uniqueElement = itemChecked.find(
          (element) => element.idMail !== elementAdded.idMail,
        )
        console.log(uniqueElement)
        if(uniqueElement){
          set({ itemChecked: [...itemChecked, uniqueElement] });
        }
        set({ itemChecked: [...itemChecked] });
      } */
      console.log(mailId);
      console.log(itemChecked);
      // console.log(currentSectionArray);
    },
    fnDeleteMailChecked: (path: string) => {
      const { itemChecked, mailDeleted } = get();
      if (!path.includes("erased")) {
        // If item.dir !== path, the user isn't on the erased section
        // const newDeletedArray = itemChecked.forEach((item) => )
        set({
          mailDeleted: [...mailDeleted, ...itemChecked],
        });
      }
      if (itemChecked.length > 0) {
        set({ itemChecked: [] });
      }
    },
  };
});

/* const newMailsArray = currentSectionArray
            .map((mail) => {
              const elementFound = itemChecked.find((itemcheck) => {
                if (mail.idMail !== itemcheck.idMail) {
                  return mail;
                }
              });
              return elementFound;
            })
            .filter((mail) => mail !== undefined);
          if (newMailsArray.length > 0) {
            set({ mailReceived: newMailsArray });
          } */
