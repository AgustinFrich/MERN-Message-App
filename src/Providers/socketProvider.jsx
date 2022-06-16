import React, { useContext, useState } from "react";
import { createContext } from "react";
import io from "socket.io-client";
import axios from "axios";
import useEnvironment from "../hooks/useEnvironment";

export const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

const SocketContextProvider = ({ children }) => {
  const { API_URL } = useEnvironment();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const [otherUser, setOtherUser] = useState(false);
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({ setted: false });

  const socket = io(API_URL, {
    reconnection: true,
    reconnectionDelay: 500,
    reconnectionAttempts: 10,
  });

  //socket.connect();

  const getUsers = async (user) => {
    const result = await axios.get(`${API_URL}/api/userList/${user.id}`);

    let newList = [];
    for (let i = 0; i < result.data.length; i++) {
      newList = [...newList, result.data[i]];
    }
    setUserList(newList);
  };

  const socketUsers = async (user, otherUser) => {
    socket.on("user-connected", async (newUser) => {
      //Toast newUser.name is now online!
      await getUsers(user);
    });

    socket.on("user-disconnected", async (disconnectedUser) => {
      //Toast disconnectedUser.name disconnected!
      await getUsers(user);
      if (disconnectedUser.id === otherUser.id) {
        setOtherUser(false);
      }
    });
  };

  const unsocketUsers = () => {
    socket.off("user-connected");
    socket.off("user-disconnected");
  };

  const joinUser = async (userData) => {
    let initData = {
      createdAt: userData.createdAt,
      name: userData.name,
      profileImg: userData.profileImg,
      id: userData.id,
      updatedAt: userData.updatedAt,
      _id: userData._id,
    };

    socket.id = userData.id;

    socket.emit("join-user", initData, (cbData) => {
      console.log("user joined");
    });
  };

  const detectOtherUser = async () => {
    socket.on("receive-message", (data) => {
      setNewMessage(data.message);
      setMessages([...messages, data.message]);
      console.log(data);
    });

    socket.on("user-typing", (data) => {
      console.log(data);
    });
  };

  const getChats = async (user, otherUser) => {
    if (otherUser) {
      const response = await axios.get(
        `${API_URL}/api/userChats/${user.id}&${otherUser.id}`
      );
      setMessages(response.data);
    }
  };

  const sendMessage = (message, senderId, senderName, receiverId) => {
    const msg = {
      senderId,
      senderName,
      receiverId,
      message,
    };

    socket.emit("send-message", msg, (cbData) => {
      console.log("message send!");
    });
    setMessages([...messages, msg]);
  };

  return (
    <SocketContext.Provider
      value={{
        user,
        setUser,
        socketUsers,
        unsocketUsers,
        getUsers,
        joinUser,
        sendMessage,
        userList,
        setUserList,
        messages,
        setMessages,
        otherUser,
        setOtherUser,
        detectOtherUser,
        newMessage,
        getChats,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
