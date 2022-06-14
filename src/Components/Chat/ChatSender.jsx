import React, { useState } from "react";
import { useSocket } from "../../Providers/socketProvider";

const ChatSender = ({ user }) => {
  const { sendMessage, otherUser } = useSocket();
  const [message, setMessage] = useState("");
  const handleSend = () => {
    sendMessage(message, user.id, user.name, otherUser.id);
  };

  return (
    <div>
      <br />
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></input>
      <button onClick={handleSend}>SEND</button>
    </div>
  );
};

export default ChatSender;
