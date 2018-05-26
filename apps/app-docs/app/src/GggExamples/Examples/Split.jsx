import React from "react";
import SplitPane from "./SplitPane";
import Contacts from "./Contacts";
import Chat from "./Chat";
export default function Split() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
