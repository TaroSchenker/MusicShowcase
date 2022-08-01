import React, { useContext, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { ColourContext } from "../../context/ColourContext";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";

const Header = () => {
  const history = useNavigate();
  const [colour, setColour] = useContext(ColourContext);
  function handleClick(e) {
    if (colour !== e.target.value) {
      setColour(e.target.value);
    } else {
      setColour('');
    }
  }
  const prevCountRef = useRef();
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRef.current = colour;
  }, [colour]);
  return (
    <Navbar  variant="dark"  style={{ backgroundColor: colour ? colour : 'black'}}>
      <Container style={{}}>
        <Row style={{}}>
          <Col xl={12}>
            <Stack gap={4} direction="horizontal">
              <Button
                variant="outline-light"
                className="me-2 py-0 px- "
                onClick={() => history(-1)}
              >
                {" "}
                Back{" "}
              </Button>
              <Navbar.Brand href="/">MUSIC SHOWCASE</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="artists">View Artists</Nav.Link>
                {/* <Nav.Link href="JimSullivan">Jim Sullivan</Nav.Link> */}
              </Nav>
            </Stack>
            <Stack direction="horizontal" style={{}}>
              <Row>
                <p
                  className="d-inline justify-content-start ps-3 mt-2 ms-6"
                  style={{ color: "white", textAlign: "left" }}
                >
                  Chose &nbsp;
                  <span style={{ color: { colour } }}>Colour &nbsp;</span>{" "}
                  Scheme{" "}
                </p>
                <Col
                  sm={1}
                  xl={1}
                  className="d-inline-flex justify-content-center"
                >
                  <Button
                    style={{
                      border: "1px solid white",
                      height: "5px",
                      width: "5px",
                    }}
                    variant="danger"
                    onClick={handleClick}
                    value="#ff4444"
                    className=""
                  ></Button>
                </Col>
                <Col
                  sm={1}
                  xl={1}
                  className="d-inline-flex justify-content-center"
                  style={{}}
                >
                  <Button
                    style={{
                      border: "1px solid white",
                      height: "5px",
                      width: "5px",
                    }}
                    variant="primary"
                    onClick={handleClick}
                    value="#0275d8"
                    className=""
                  ></Button>
                </Col>
                <Col
                  sm={1}
                  xl={1}
                  className="d-inline-flex justify-content-center"
                  style={{}}
                >
                  <Button
                    style={{
                      border: "1px solid white",
                      height: "5px",
                      width: "5px",
                    }}
                    variant="info"
                    onClick={handleClick}
                    value="#5bc0de"
                    className=""
                  ></Button>
                </Col>
                <Col
                  sm={1}
                  xl={1}
                  className="d-inline-flex justify-content-center"
                  style={{}}
                >
                  <Button
                    style={{
                      border: "1px solid white",
                      height: "5px",
                      width: "5px",
                    }}
                    variant="warning"
                    onClick={handleClick}
                    value="#FF8800"
                    className=""
                  ></Button>
                </Col>
                <Col
                  sm={1}
                  xl={1}
                  className="d-inline-flex justify-content-center"
                  style={{}}
                >
                  <Button
                    style={{
                      border: "1px solid white",
                      height: "5px",
                      width: "5px",
                    }}
                    variant="primary"
                    onClick={handleClick}
                    value="#0d47a1"
                    className=""
                  ></Button>
                </Col>
                <Col
                  sm={1}
                  xl={1}
                  className="d-inline-flex justify-content-center"
                  style={{}}
                >
                  <Button
                    style={{
                      border: "1px solid white",
                      height: "5px",
                      width: "5px",
                    }}
                    variant="success"
                    onClick={handleClick}
                    value="#007E33"
                    className=""
                  ></Button>
                </Col>
              </Row>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
