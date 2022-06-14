import React from "react";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatSender from "./ChatSender";

const Chat = ({ user }) => {
  return (
    <div>
      <ChatHeader />
      <ChatMessages user={user} />
      <ChatSender user={user} />
    </div>
  );
};

export default Chat;
