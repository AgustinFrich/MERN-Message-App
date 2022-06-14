import { Button, Card, CardGroup, Form } from "react-bootstrap";
import "./SignUp.css";

const SignUp = () => {
  const image = require("./image.jpg");
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
                placeholder="E.g: John123"
              />
            </Form.Group>
            <Form.Group className="SignUp-FormGroup">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="SignUp-EraseBorder"
                as={Form.Control}
                type="password"
                placeholder="• • • • • • • •"
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

export default SignUp;
