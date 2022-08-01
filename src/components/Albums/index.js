import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ColourContext } from "../../context/ColourContext";
// import Lyrics2 from "../Lyrics2";


const Albums = ({ albumData }) => {
  const [show, setShow] = useState(false);
  const [colour, setColour] = useContext(ColourContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className="justify-content-center">
        {albumData.map((album, i) => (
          <Col
            key={i}
            sm={12}
            md={4}
            lg={3}
            className="d-flex justify-content-center p-3 m-4 shadow "
            style={{ backgroundColor: colour }}
          >
            <Card style={{ width: "38rem" }}>
              <Card.Img variant="top" src={album.image} />
              <Card.Body>
                <Card.Title className="text-center">{album.artist}</Card.Title>
                <Card.Text className="text-center">{album.title}</Card.Text>
                {album.songs.map((song) => (
                  <>
                    <Card.Text className="text-center">
                      <Button
                        variant="dark"
                        onClick={handleShow}
                        value="Black"
                        className=""
                      >
                        {song}
                      </Button>
                    </Card.Text>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="false"
                      backdropClassName="modal-backdrop"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                        {/* <Lyrics2 /> */}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Albums;
