import {useContext, useState} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { TextContext } from '../context';

const NavigationBar = () => {
  const { appendText, setError } = useContext(TextContext)

  const [text, setText ] = useState('');
  const onClick = async (e) =>{
    e.preventDefault();

    setError(null);
    const response = await fetch(`http://localhost:5000/iecho?text=${text}`)
      .then(response => response.json());

    if (response.error) {
      setError(response.error)
    } else {
      appendText({
        ...response,
        original: text,
      });
      setText('');
    }
  }

  return (
    <Navbar className="bg-danger">
      <Container>
        <Row className="w-100">
          <Col sm={2}></Col>
          <Col sm={7}>
            <FormControl type="text" placeholder="Insert text" value={text} onChange={(e) => { setText(e.target.value)}} />
          </Col>
          <Col sm={1}>
            <Button className="px-4" type="submit" onClick={onClick}>Send</Button>
          </Col>
          <Col sm={2} />
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;