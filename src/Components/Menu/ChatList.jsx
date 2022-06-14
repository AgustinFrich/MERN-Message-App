/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useSocket } from "../../Providers/socketProvider";

const ChatList = ({ user }) => {
  const { userList, getChats, setOtherUser } = useSocket();

  const handleClick = (key) => {
    setOtherUser(userList[key]);
    getChats(user, userList[key]);
  };

  return (
    <div>
      <h2>CONNECTED USERS</h2>
      <ul>
        {userList[0] !== undefined ? (
          userList.map((item, key) => {
            if (item.connected) {
              return (
                <li key={key}>
                  <label onClick={() => handleClick(key)}>{item.name}</label>
                </li>
              );
            }
          })
        ) : (
          <h2>no friends</h2>
        )}
      </ul>
    </div>
  );
};

export default ChatList;
