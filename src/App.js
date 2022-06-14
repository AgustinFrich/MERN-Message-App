import { useState } from "react";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import ChatList from "./Components/Menu/ChatList";
import Login from "./Components/Menu/Login";
import Profile from "./Components/Menu/Profile";
import SearchBar from "./Components/Menu/SearchBar";
import { useSocket } from "./Providers/socketProvider";
import axios from "axios";
import useEnvironment from "./hooks/useEnvironment";

function App() {
  const [user, setUser] = useState({ setted: false });

  const { joinUser } = useSocket();
  const { API_URL } = useEnvironment();

  //LOGIN
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const login = async (e) => {
    setLoading(true);
    e.preventDefault();

    const response = await axios.get(
      `${API_URL}/api/login/${username}&${password}`
    );
    console.log(response);
    setLoading(false);

    if (response.data.user) {
      // localStorage.setItem("token", response.data.user);
      //navigate("../dashboard");
      response.data.user.setted = true;
      setUser(response.data.user);
      joinUser(response.data.user);
    } else {
      setErrorMsg("Username or password are incorrect.");
    }
  };

  //LOGIN

  return (
    <>
      {user.setted === true ? (
        <div className="App">
          <div>
            <Profile user={user} />
            <SearchBar />
            <ChatList user={user} />
          </div>
          <div>
            <Chat user={user} />
          </div>
        </div>
      ) : (
        <>
          <Login
            login={login}
            username={username}
            setUsername={setUsername}
            loading={loading}
            password={password}
            setPassword={setPassword}
            errorMsg={errorMsg}
          />
        </>
      )}
    </>
  );
}

export default App;
