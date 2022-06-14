//import { useNavigate } from "react-router-dom";
import { Button, Card, CardGroup, Form } from "react-bootstrap";
import "./SignUp.css";

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
  const image = "./LogInImage.jpg";

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
    <div className="SignUp">
      <br />
      <CardGroup>
        <Card>
          <Card.Img src={image} alt="Card image" />
          <Card.ImgOverlay className="SignUp-image">
            <Card.Title className="SignUp-imageTitle">Sign Up</Card.Title>
            <Card.Text>
              Join us and share with us <br /> this wonderful experience.
              <hr />
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card>
          <Form className="SignUp-Form">
            <Form.Group className="SignUp-FormGroup">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="SignUp-EraseBorder "
                type="text"
                name="username"
                placeholder="Examle123"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Form.Group>
            <Form.Group className="SignUp-FormGroup">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="SignUp-EraseBorder"
                as={Form.Control}
                name="password"
                placeholder="• • • • • • • •"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button className="SignUp-Button">Get Started</Button>
            <p className="SignUp-SignIn">
              Already have an account? <a href="log-in">Sign In</a>
            </p>
          </Form>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default Login;

/*


<div className="SignUp">
      <br />
      <CardGroup>
        <Card>
          <Card.Img src={image} alt="Card image" />
          <Card.ImgOverlay className="SignUp-image">
            <Card.Title className="SignUp-imageTitle">Sign Up</Card.Title>
            <Card.Text>
              Join us and share with us <br /> this wonderful experience.
              <hr />
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card>
          <Form className="SignUp-Form">
            <Form.Group className="SignUp-FormGroup">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="SignUp-EraseBorder "
                type="text"
                name="username"
              placeholder="Examle123"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              />
            </Form.Group>
            <Form.Group className="SignUp-FormGroup">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="SignUp-EraseBorder"
                as={Form.Control}
              name="password"
              placeholder="• • • • • • • •"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              />
            </Form.Group>
            <Button className="SignUp-Button">Get Started</Button>
            <p className="SignUp-SignIn">
              Already have an account? <a href="log-in">Sign In</a>
            </p>
          </Form>
        </Card>
      </CardGroup>
      <br />
    </div>
*/

/*

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
*/
