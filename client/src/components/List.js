import { useContext } from "react";
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import { TextContext } from '../context';

const ListContainer = styled(Container)`
  min-height: 600px;
`;

const List = () => {
  const { texts, error } = useContext(TextContext);
  return (
    <>
      {error && (
        <Alert variant="danger">
          You must write one letter or more
        </Alert>
      )}
      <ListContainer className="bg-white mt-5 py-4">
        <Row>
          <Col>
            <h3>Results:</h3>
            <Container>
              <Row>
                <Col className="bg-white" sm={{ offset: 2, span: 8 }}>
                  {texts.length === 0 ? (
                    <p>Send your first string</p>
                  ) : texts.map(
                    (text, index) => (
                      <Card key={`card-${index}`} className="mb-2">
                        <Card.Body  className="p-2">{text.original}: {text.text} {text.palindrome && '(Palindromo)'} </Card.Body>
                      </Card>
                    )
                  )}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </ListContainer>
    </>
  );
}

export default List;