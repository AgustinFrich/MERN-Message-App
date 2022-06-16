import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Menu/Main";
import SignUp from "./Components/Menu/Acces Form/SignUp";
import Login from "./Components/Menu/Acces Form/Login";
import DashBoard from "./Components/Menu/DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
