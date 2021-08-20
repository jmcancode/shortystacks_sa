import React, { Fragment, useState } from "react";
import { Row, Col, Button, Form, Modal, Image } from "react-bootstrap";
import logo from "../assets/IMG_6296.webp";
import { db } from "../firebase/config";

function MyVerticallyCenteredModal(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    db.collection("shorties")
      .add({
        firstName: firstName,
        lastName: lastName,
        email: email,
      })
      .then(() => {
        alert(
          "You've successfully signed-up to our mailing list! Add us to your favorites list to be the first to know our pop-up locations and weekly menu updates."
        );
      })
      .catch((err) => {
        alert(err.message);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Stay Current
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{}} className="p-2">
          <small>
            Join our mailing list to stay current with Shorty Stacks - SA's
            pop-up locations, events, and menu updates.
          </small>
        </div>
        <Form className="p-2" onSubmit={onSubmit}>
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
          <div className="d-grid gap-2 pt-3">
            <Button
              type="submit"
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
        className="container text-center"
        style={{
          width: "100%",
          height: "100%",
          paddingTop: "15%",
        }}
      >
        <Row xs={1} md={1} lg={1}>
          <Col className="pt-4 pb-4">
            <div className="text-center">
              <Image
                fluid
                src={logo}
                alt="logo"
                width={100}
                height={100}
                style={{ width: "350px", height: "100%" }}
              />
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
              SUBSCRIBE
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
                  style={{ color: "#fc9596", textDecoration: "none" }}
                >
                  INSTAGRAM
                </a>
              </div>
              <div className="p-2">
                <a
                  href="https://twitter.com/shortystacks_sa?lang=en"
                  rel="noopener noreferrer"
                  target="__blank"
                  style={{ color: "#fc9596", textDecoration: "none" }}
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
