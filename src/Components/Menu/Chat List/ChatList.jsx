/* eslint-disable array-callback-return */
import React from "react";
import "./ChatList.css";
import { useSocket } from "../../../Providers/socketProvider";

const ChatList = () => {
  const { userList, user, getChats, setOtherUser } = useSocket();

  const handleClick = (key) => {
    setOtherUser(userList[key]);
    getChats(user, userList[key]);
  };

  return (
    <div>
      <br />
      <h2>USERS</h2>
      <div className="ChatList-Container">
        {userList[0] !== undefined ? (
          userList.map((item, key) => {
            return (
              <div
                className="ChatList-User"
                key={key}
                onClick={() => handleClick(key)}
              >
                <label>{item.name}</label>
              </div>
            );
          })
        ) : (
          <h2>no friends</h2>
        )}
      </div>
    </div>
  );
};

export default ChatList;
