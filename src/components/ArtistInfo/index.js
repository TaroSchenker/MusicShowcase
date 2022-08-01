import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ColourContext } from "../../context/ColourContext";


const ArtistInfo = () => {
  const [colour, setColour] = useContext(ColourContext);
  return (
    <Container>
      <Row>
        <Col className="justify-content-center ">
          <Card>
            <Card.Header
              style={{ backgroundColor: colour }}
              role="heading"
              className="fs-2 text-center text-dark "
            >
              Cotton Jones
            </Card.Header>
            <Card.Body>
              <Card.Title className="text-center">
                Genre: Indie Folk{" "}
              </Card.Title>
              <Card.Text className="text-center">
                Cotton Jones (formerly The Cotton Jones Basket Ride) is an
                American indie folk band, with elements of psychedelic folk,
                dream pop, baroque pop, and Americana, based in Cumberland,
                Maryland and currently signed to Suicide Squeeze Records.
              </Card.Text>
              <Card.Text className="text-center">
                Michael Nau (born October 31, 1984) is the lead
                singer-songwriter and plays guitar, Whitney McGraw (born July
                20, 1986) is on keyboards, organ, and electronic autoharp, Todd
                Gowans (born February 4, 1986) plays lead electric guitar, with
                Greg Bender on bass.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArtistInfo;
