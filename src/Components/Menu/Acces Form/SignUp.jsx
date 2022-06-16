import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useEnvironment from "../../../hooks/useEnvironment";
import AccesForm from "./AccesForm";

const SignUp = () => {
  const { API_URL } = useEnvironment();

  //LOGIN
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const signup = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      console.log(username);

      const response = await axios.post(`${API_URL}/api/signup`, {
        name: username,
        password: password,
      });

      if (response.data.user) {
        navigate("../login");
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
      action={signup}
      type={"Sign Up"}
      username={username}
      setUsername={setUsername}
      loading={loading}
      password={password}
      setPassword={setPassword}
      errorMsg={errorMsg}
    />
  );
};

export default SignUp;
