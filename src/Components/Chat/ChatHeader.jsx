import React from "react";
import "../Menu/Profile.css";
import { useSocket } from "../../Providers/socketProvider";

const ChatHeader = () => {
  const { otherUser } = useSocket();
  const image =
    otherUser.profileImg !== ""
      ? otherUser.profileImg
      : "https://mern-message-frich.herokuapp.com/images/profiles/DEFAULT.png";

  return (
    <div>
      <hr />
      <div className="Profile">
        <img className="Profile-Image" src={image} alt="" />
        <div className="Profile-Name">{otherUser.name}</div>

        <svg
          height="16"
          width="16"
          className={otherUser.connected ? "Profile-Online" : "Profile-Offline"}
        >
          <circle cx="8" cy="8" r="4" />
        </svg>
      </div>
    </div>
  );
};

export default ChatHeader;
