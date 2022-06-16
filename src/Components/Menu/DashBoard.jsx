import React from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../Providers/socketProvider";
import Chat from "../Chat/Chat";
import ChatList from "./Chat List/ChatList";
import Profile from "./Profile";
import SearchBar from "./Chat List/SearchBar";

const DashBoard = () => {
  const { otherUser, user } = useSocket();
  const navigate = useNavigate();

  return (
    <>
      {user.setted === true ? (
        <div className="App">
          <br />
          <div>
            <Profile />
            <SearchBar />
            <ChatList />
          </div>
          <div>{otherUser ? <Chat /> : <></>}</div>
          <br />
        </div>
      ) : (
        navigate("../signup")
      )}
    </>
  );
};

export default DashBoard;
