import { useState } from "react";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import ChatList from "./Components/Menu/ChatList";
import Login from "./Components/Menu/SignUp/Login";
import Profile from "./Components/Menu/Profile";
import SearchBar from "./Components/Menu/SearchBar";
import { useSocket } from "./Providers/socketProvider";
import axios from "axios";
import useEnvironment from "./hooks/useEnvironment";

function App() {
  const [user, setUser] = useState({ setted: false });

  const { joinUser, otherUser } = useSocket();
  const { API_URL } = useEnvironment();

  //LOGIN
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
        //navigate("../dashboard");
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
          <div>{otherUser ? <Chat user={user} /> : <></>}</div>
        </div>
      ) : (
        <div className="flex">
          <Login
            login={login}
            username={username}
            setUsername={setUsername}
            loading={loading}
            password={password}
            setPassword={setPassword}
            errorMsg={errorMsg}
          />
        </div>
      )}
    </>
  );
}

export default App;
