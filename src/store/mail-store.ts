import { create } from "zustand";
import { MailDataProps } from "@/interface/interface";
import { mailReceivedFake } from "@/data";

/* Functionalities of this section
 */

interface MailStoreProps {
  // Fake properties
  mailReceived: MailDataProps[];
  mailSent: MailDataProps[];
  mailFavorities: MailDataProps[];
  mailDeleted: MailDataProps[];
  mailTemplates: MailDataProps[];
  mailArchived: MailDataProps[];
  // Fake properties

  // Functionalities
  // Secondary functions
  selectData: (currentSection: string) => MailDataProps[] | undefined;
}

export const useMailStore = create<MailStoreProps>()((set, get) => {
  return {
    // Data
    mailReceived: mailReceivedFake,
    mailSent: mailReceivedFake.slice(0, 4),
    mailFavorities: mailReceivedFake.slice(0, 5),
    mailDeleted: mailReceivedFake.slice(0, 2),
    mailTemplates: mailReceivedFake.slice(0, 3),
    mailArchived: mailReceivedFake.slice(0, 1),

    // Funtions to manipulate the data

    // Secondary functions
    selectData(currentSection: string): MailDataProps[] | undefined {
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
      const dataMailFounded = mailSectionUrls.find((section) => section.dir === currentSection)
      return dataMailFounded?.dataArr
    },
  };
});
