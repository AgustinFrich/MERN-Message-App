//import { useNavigate } from "react-router-dom";

const Login = ({
  loading,
  login,
  username,
  setUsername,
  password,
  setPassword,
  errorMsg,
}) => {
  // const navigate = useNavigate();

  if (loading) {
    return (
      <div className="d-flex justify-content-center m-5">
        <div className="p-4">
          <h1>Loading</h1>
          <hr />
          <br />
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="p-4">
        <h1>Log In</h1>
        <form onSubmit={login}>
          <div className="d-grid justify-content-center">
            <hr />
            <h6 className="m-2">User name</h6>
            <input
              type={"text"}
              name="username"
              placeholder="Examle123"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            ></input>
            <h6 className="m-2">Password</h6>
            <input
              type={"password"}
              name="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <br />
            {errorMsg !== "" ? (
              <p style={{ color: "#FF0000" }}>{errorMsg}</p>
            ) : (
              <></>
            )}
            <br />
            <button className=" btn btn-primary" type="submit">
              Log In
            </button>
            <br />
            <p>
              Or else <a href="../signup">Sign Up</a>
            </p>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
