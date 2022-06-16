/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./ChatMessages.css";
import { useSocket } from "../../Providers/socketProvider";
const ChatMessages = () => {
  const { messages, getChats, user, otherUser, newMessage } = useSocket();

  useEffect(() => {
    getChats(user, otherUser);
  }, [newMessage]);

  return (
    <div className="center">
      <hr />
      {messages.map((message, key) => {
        const isMine = message.senderId === user.id;
        return (
          <div key={key}>
            <div className={isMine ? "myMessage" : "otherMessage"}>
              {isMine ? (
                <svg height="8" className="mySvg">
                  <path d="M0 8 L0 0 L8 0 Z" />
                </svg>
              ) : (
                <svg className="otherSvg">
                  <path d="M8 8 L0 0 L8 0 Z" />
                </svg>
              )}
              <p className="message">{message.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
