import logo from './logo.svg';
import './App.css';
import { InputGroup, Button, Form, Alert, Image } from 'react-bootstrap';


const App = () => {
  return (
    <div className="App">


      <Alert variant='primary'>Welcome to Summer Camp </Alert>
      <Image src="b.jpg" fluid />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Button variant="primary">Primary</Button>{' '}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


    </div>

  );
}

export default App;
