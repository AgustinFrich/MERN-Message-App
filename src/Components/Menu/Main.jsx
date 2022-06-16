/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/signup");
  }, []);

  return <></>;
};

export default Main;
