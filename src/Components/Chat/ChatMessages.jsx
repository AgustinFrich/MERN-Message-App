import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ChatMessages.css";
import { useSocket } from "../../Providers/socketProvider";
const ChatMessages = ({ user }) => {
  const { messages, getChats, otherUser, newMessage } = useSocket();

  useEffect(() => {
    getChats(user, otherUser);
  }, [newMessage]);

  return (
    <div className="center">
      <hr />
      <h2>Chat Messages</h2>
      {messages.map((message, key) => {
        return (
          <div key={key}>
            <div
              className={
                message.senderId === user.id ? "myMessage" : "otherMessage"
              }
            >
              <p className="messageName">{message.senderName}</p>
              <p className="message">{message.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
