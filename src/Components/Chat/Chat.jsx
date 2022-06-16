import React from "react";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatSender from "./ChatSender";

const Chat = () => {
  return (
    <div>
      <ChatHeader />
      <ChatMessages />
      <ChatSender />
    </div>
  );
};

export default Chat;
