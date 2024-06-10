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
  // mailGlobalStaus: boolean;
  // Fake properties

  // Functionalities
  fnReadMark: (mailId: string, section: string) => void;
  fnDeleteMail: (mailId: string, section: string) => void;
  fnDeleteMailFromTrash: (mailId: string) => MailDataProps;
  // Secondary functions
  fnSelectData: (currentSection: string) => MailDataProps[] | undefined;
  // setMailGlobalStatus: (stateValue: boolean) => void;
}

export const useMailStore = create<MailStoreProps>()((set, get) => {
  return {
    // Data
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
      const { fnSelectData, mailDeleted } = get();
      const dataArray = fnSelectData(section);
      if (dataArray) {
        const mailFounded = dataArray.filter((mail) => mail.idMail === mailId);
        const mailFounded2 = dataArray.filter((mail) => mail.idMail !== mailId);
        // console.log(mailFounded);
        set({ mailReceived: [...mailFounded2] });
        set({ mailDeleted: [...mailDeleted, ...mailFounded] });
        //console.log(mailDeleted);
      }
    },
    fnDeleteMailFromTrash: (mailId: string) => {
      const { mailDeleted } = get();
      const mailToDeletedIndex = mailDeleted.findIndex(
        (mail) => mail.idMail === mailId,
      );
      return mailDeleted[mailToDeletedIndex]
    },
    // Received mails

    // Secondary functions
    fnSelectData(currentSection: string): MailDataProps[] | undefined {
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
  };
});
