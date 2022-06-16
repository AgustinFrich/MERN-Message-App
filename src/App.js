import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Menu/Main";
import SignUp from "./Components/Menu/SignUp/SignUp";
import Login from "./Components/Menu/SignUp/Login";
import DashBoard from "./Components/Menu/DashBoard";

function App() {
  const [user, setUser] = useState({ setted: false });

  //LOGIN

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={<DashBoard user={user} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
