import React from "react";

const ChatHeader = () => {
  let contact = { name: "AGUS", profileImg: "./logo192.png" };
  return (
    <div>
      <hr />
      <h2>Chat Header</h2>
      <img src={contact.profileImg} alt="." />
      <p>{contact.name}</p>
    </div>
  );
};

export default ChatHeader;
