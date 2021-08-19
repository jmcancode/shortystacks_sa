import React, { Fragment, useState } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Join the Club!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{}} className="p-2">
          <small>
            Subscribe to our mailing list to stay current with Shorty Stacks -
            SA locations and events.
          </small>
        </div>
        <Form className="p-2">
          <Form.Group>
            <Form.Control
              style={{
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
              }}
              placeholder="first name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              style={{
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
              }}
              placeholder="last name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              style={{
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
              }}
              placeholder="bestminipancakes@in-sa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              style={{
                borderColor: "transparent",
                backgroundColor: "#fc9596",
                margin: "5px",
              }}
            >
              Subscribe
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default function Main() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <div
        className="container pt-5 mt-5 text-center"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Row xs={1} md={1} lg={1}>
          <Col className="pt-4 pb-4">
            <div>
              <h1>Shorty Stacks</h1>
              <small className="text-muted">
                "The Best Mini-Pancakes in San Antonio"
              </small>
            </div>
          </Col>
          <Col>
            {" "}
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
              style={{
                borderColor: "transparent",
                backgroundColor: "#fc9596",
                margin: "5px",
              }}
            >
              Subscribe to our mailing list
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div
              className="container pt-4"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div className="p-2">
                <a
                  href="https://www.instagram.com/shortystacks_sa/"
                  rel="noopener noreferrer"
                  target="__blank"
                  style={{ color: "#418b8c", textDecoration: "none" }}
                >
                  INSTAGRAM
                </a>
              </div>
              <div className="p-2">
                <a
                  href="https://twitter.com/shortystacks_sa?lang=en"
                  rel="noopener noreferrer"
                  target="__blank"
                  style={{ color: "#418b8c", textDecoration: "none" }}
                >
                  TWITTER
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
