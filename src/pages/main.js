import React, {Fragment, useState, useRef} from "react";
// react-bootstrap
import {Button, Form, Modal} from "react-bootstrap";
// firebase
import {db} from "../firebase/config";
// custom css
import "./css/main.css"
// hero image
import heroImage from "../assets/IMG_6296.webp"
// react-icons
import {AiOutlineArrowUp} from 'react-icons/ai'

// <----------------Starts here---------------------> // custom modal
function MyVerticallyCenteredModal(props) {
    // state hooks
    const [firstName,
        setFirstName] = useState("");
    const [lastName,
        setLastName] = useState("");
    const [email,
        setEmail] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        db
            .collection("shorties")
            .add({firstName: firstName, lastName: lastName, email: email})
            .then(() => {
                alert("You've successfully signed-up to our mailing list! Add us to your favorites list" +
                        " to be the first to know our pop-up locations and weekly menu updates.");
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
            centered>
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    style={{
                    color: '#438b8e'
                }}>
                    Stay Current
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{}} className="p-2">
                    <small>
                        Join our mailing list to stay current with Shorty Stacks - SA's pop-up
                        locations, events, and menu updates.
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
                            borderRightColor: "transparent"
                        }}
                            placeholder="first name"
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            style={{
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                            borderTopColor: "transparent",
                            borderLeftColor: "transparent",
                            borderRightColor: "transparent"
                        }}
                            placeholder="last name"
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="email"
                            style={{
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                            borderTopColor: "transparent",
                            borderLeftColor: "transparent",
                            borderRightColor: "transparent"
                        }}
                            placeholder="bestminipancakes@in-sa.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </Form.Group>
                    <div className="d-grid gap-2 pt-3">
                        <Button
                            type="submit"
                            style={{
                            borderColor: "transparent",
                            backgroundColor: "#fecf2f",
                            margin: "5px"
                        }}>
                            Subscribe
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default function Main() {
    // modal pop-up
    const [modalShow,
        setModalShow] = useState(false);
    // ref hooks
    const scrollToContactRef = useRef();
    // use state
    const [contactName,
        setContactName] = useState();
    const [contactEmail,
        setContactEmail] = useState();
    const [contactSubject,
        setContactSubject] = useState();
    const [contactMessage,
        setContactMessage] = useState();

    const submitContactForm = () => {
        window.open(`mailto:shortystacks.sa@gmail.com?subject=${encodeURIComponent(contactSubject)}&body=${encodeURIComponent(contactName)} (${encodeURIComponent(contactEmail)}): ${encodeURIComponent(contactMessage)}`)
    }

    return (
        <Fragment>
            <section className="landing-container text-center">
                <div
                    className="landing"
                    style={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div >
                        <div>
                            <img src={heroImage} alt="logo"/>
                        </div>
                        <div
                            className="text-black"
                            style={{
                            padding: "20px"
                        }}>
                            <h1>The Best Mini-Pancakes in South Texas!</h1>
                        </div>
                        <div className="button-group">
                            <Button
                                variant="secondary"
                                onClick={() => setModalShow(true)}
                                style={{
                                borderColor: "transparent",
                                margin: '5px',
                                backgroundColor: "#438b8e"
                            }}>
                                SUBSCRIBE
                            </Button>
                            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                            <Button
                                variant="outline-secondary"
                                style={{
                                borderColor: "#438b8e",
                                color: "#438b8e"
                            }}
                                onClick={() => scrollToContactRef.current.scrollIntoView()}>Contact Us</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-container text-white" ref={scrollToContactRef}>
                <div
                    className="landing"
                    style={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <h1>
                        Let's connect
                    </h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Full Name"
                                value={contactName}
                                onChange={(e) => setContactName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="subject"
                                value={contactSubject}
                                onChange={(e) => setContactSubject(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>How can we help?</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={contactMessage}
                                onChange={(e) => setContactMessage(e.target.value)}/>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button onClick={submitContactForm} variant="secondary">Submit</Button>
                        </div>
                    </Form>
                    <div
                        style={{
                        padding: 90,
                        
                    }}>
                        <AiOutlineArrowUp onClick={() => window.scrollTo(0, 0)}/>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
