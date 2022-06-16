import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useEnvironment from "../../../hooks/useEnvironment";
import { useSocket } from "../../../Providers/socketProvider";
import AccesForm from "./AccesForm";

const Login = () => {
  const { joinUser, setUser } = useSocket();
  const { API_URL } = useEnvironment();

  //LOGIN
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      console.log(username);

      const response = await axios.get(
        `${API_URL}/api/login/${username}&${password}`
      );

      if (response.data.user) {
        // localStorage.setItem("token", response.data.user);
        navigate("../dashboard");
        response.data.user.setted = true;
        setUser(response.data.user);
        joinUser(response.data.user);
      } else {
        setErrorMsg(response.data.error);
      }
    } catch (error) {
      setErrorMsg("Username or password are empty");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AccesForm
      action={login}
      type={"Log In"}
      username={username}
      setUsername={setUsername}
      loading={loading}
      password={password}
      setPassword={setPassword}
      errorMsg={errorMsg}
    />
  );
};

export default Login;
