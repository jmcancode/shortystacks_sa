import React, {Fragment, useState} from 'react'
// custom styles
import "./footer.css"
import footerLogo from "../../assets/IMG_6296.webp";
import {Modal, Button} from 'react-bootstrap';
import PaymentForm from "../payment-form/payment-form"

export default function Footer() {

    const [show,
        setShow] = useState(false);

    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);

    return (
        <Fragment>
            <div className="footer">
                <div className="footer-container">
                    <div className="inner-footer container p-5">
                        <div>
                            <img src={footerLogo} alt="footerlogo" className="footer-logo"/>
                        </div>
                        <div
                            style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: "center",
                            color: "#fff"
                        }}>
                            <p className="followUs">Follow us</p>
                            <small
                                style={{
                                fontSize: "1rem"
                            }}>@shortystacks_sa</small>
                        </div>
                        <div className="footer-list">
                            <ul
                                style={{
                                listStyle: "none"
                            }}>
                                <li>
                                    <a className="footer-links" href="mailto:shortystacks_sa@gmail.com">

                                        Catering Contact
                                    </a>
                                </li>
                                <li>
                                    <Button onClick={handleModalShow}>Pay here</Button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    < Modal show={show} onHide={handleModalClose} backdrop="static" keyboard={false} >
                        <Modal.Dialog style={{width: '80%'}}>
                            <Modal.Header closeButton>
                                <Modal.Title>Thank you for your purchase!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <small>Please process your payment</small>
                                <PaymentForm/>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal>
                </div>
                <div className="outer-footer">
                    <small>All Rights Reservered for E. Sanchez Enterprises, LLC || Web App made with
                        <span
                            style={{
                            paddingLeft: '5px',
                            paddingRight: '5px'
                        }}>❤️</span>
                        by
                        <a
                            className="bboy"
                            href="http://www.bboycreative.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{
                            paddingLeft: '5px',
                            paddingRight: '5px'
                        }}>b-boy creative</a>
                    </small>
                </div>
            </div>

        </Fragment>
    )
}
