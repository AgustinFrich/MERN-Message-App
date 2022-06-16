import React, { useState } from "react";
import { useSocket } from "../../Providers/socketProvider";

const ChatSender = () => {
  const { sendMessage, otherUser, user } = useSocket();
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message === "") return;
    sendMessage(message, user.id, user.name, otherUser.id);
    setMessage("");
  };

  return (
    <div>
      <br />
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      ></input>
      <button onClick={handleSend}>SEND</button>
    </div>
  );
};

export default ChatSender;
