//import { useNavigate } from "react-router-dom";
import { Button, Card, CardGroup, Form } from "react-bootstrap";
import "./SignUp.css";

const AccesForm = ({
  loading,
  action,
  type,
  username,
  setUsername,
  password,
  setPassword,
  errorMsg,
}) => {
  const image = type === "Log In" ? "./LogInImage.jpg" : "./SignUpImage.jpg";
  const message =
    type === "Log In"
      ? "Welcome again."
      : "Join us and share with us \n this wonderful experience.";
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
    <div className="d-flex justify-content-center border-0">
      <div className="SignUp">
        <CardGroup className="SignUp-FirstCard">
          <Card className="SignUp-FirstCard">
            <Card.Img src={image} alt="Card image" />
            <Card.ImgOverlay className="SignUp-image">
              <Card.Title as={"h1"} className="SignUp-imageTitle">
                {type}
              </Card.Title>
              <Card.Text>{message}</Card.Text>
              <hr />
            </Card.ImgOverlay>
          </Card>

          <Card>
            <Form className="SignUp-Form" onSubmit={action}>
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
                  type="password"
                  placeholder="??? ??? ??? ??? ??? ??? ??? ???"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>
              {errorMsg !== "" ? (
                <p style={{ color: "#FF0000" }}>{errorMsg}</p>
              ) : (
                <></>
              )}
              <Button className="SignUp-Button" type="submit">
                {type}
              </Button>
              <br />
              <br />
              <p className="SignUp-SignIn">
                Already have an account?{" "}
                {type === "Log In" ? (
                  <a href="signup">Sign Up</a>
                ) : (
                  <a href="login">Log In</a>
                )}
              </p>
            </Form>
          </Card>
        </CardGroup>
        <br />
      </div>
    </div>
  );
};

export default AccesForm;
