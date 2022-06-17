import React, { useEffect, useState } from "react";
import "../Menu/Profile.css";
import { useSocket } from "../../Providers/socketProvider";

const ChatHeader = () => {
  const { otherUser } = useSocket();
  const image =
    otherUser.profileImg !== ""
      ? otherUser.profileImg
      : "https://mern-message-frich.herokuapp.com/images/profiles/DEFAULT.png";

  const [offlineText, setOfflineText] = useState("");

  const lastTime = (last) => {
    const days = last / (1000 * 60 * 60 * 24);
    const hours = last / (1000 * 60 * 60);
    const minutes = last / (1000 * 60);
    console.log(last * 1000);
    const response =
      days > 1
        ? days.toFixed(0) + " days ago"
        : hours > 1
        ? hours.toFixed(0) + " hours ago"
        : minutes > 1
        ? minutes.toFixed(0) + " minutes ago"
        : "a few seconds ago";

    return response;
  };

  useEffect(() => {
    if (otherUser) {
      const last = Date.now() - otherUser.updatedAt;
      setOfflineText(lastTime(last));
    }
  }, [otherUser]);

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
        {!otherUser.connected ? (
          <p className="Profile-LastConnected">
            Last time online
            <br />
            {offlineText}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
