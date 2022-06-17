/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { useSocket } from "../../Providers/socketProvider";
const Profile = () => {
  const {
    getUsers,
    socketUsers,
    otherUser,
    unsocketUsers,
    detectOtherUser,
    user,
  } = useSocket();

  const [get, setGet] = useState(true);

  const image =
    user.profileImg !== ""
      ? user.profileImg
      : "https://mern-message-frich.herokuapp.com/images/profiles/DEFAULT.png";

  useEffect(() => {
    if (get) {
      getUsers(user);
      setGet(false);
    }
    socketUsers(user, otherUser);
    detectOtherUser();

    return () => {
      unsocketUsers();
    };
  }, [otherUser]);

  return (
    <div>
      <h2>Profile</h2>
      <div className="Profile">
        <img className="Profile-Image" src={image} alt="" />
        <div className="Profile-Name">{user.name}</div>
      </div>
      <hr />
    </div>
  );
};

export default Profile;
