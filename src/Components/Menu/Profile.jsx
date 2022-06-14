/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { useSocket } from "../../Providers/socketProvider";
const Profile = ({ user }) => {
  const { getUsers, socketUsers, detectOtherUser } = useSocket();
  const [get, setGet] = useState(true);
  useEffect(() => {
    if (get) {
      getUsers(user);
      setGet(false);
    }
    detectOtherUser();
    socketUsers(user);
  }, []);

  return <div>Profile</div>;
};

export default Profile;
