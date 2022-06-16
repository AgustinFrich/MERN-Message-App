import React from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../Providers/socketProvider";
import Chat from "../Chat/Chat";
import ChatList from "./ChatList";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

const DashBoard = ({ user }) => {
  const { otherUser } = useSocket();
  const navigate = useNavigate();

  return (
    <>
      {user.setted === true ? (
        <div className="App">
          <div>
            <Profile user={user} />
            <SearchBar />
            <ChatList user={user} />
          </div>
          <div>{otherUser ? <Chat user={user} /> : <></>}</div>
        </div>
      ) : (
        navigate("../signup")
      )}
    </>
  );
};

export default DashBoard;
