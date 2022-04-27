import React, {Fragment} from 'react'
// custom styles
import "./footer.css"
import footerLogo from "../../assets/IMG_6296.webp";

export default function Footer() {
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
                            </ul>

                        </div>
                    </div>
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
