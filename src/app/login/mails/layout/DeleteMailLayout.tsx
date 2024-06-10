import { MailDataProps } from "@/interface/interface";
import React from "react";

export default function DeleteMailLayout({
  mailObj,
}: {
  mailObj: MailDataProps;
}) {
  return <div>{mailObj.title} { mailObj.userName}</div>;
}
