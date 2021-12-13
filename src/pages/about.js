import React, {Fragment} from "react";
// custom css
import "./css/about.css"
// react-bootstrap
import {Image} from 'react-bootstrap'
// dashPhoto
import dashPhoto from "../assets/about.jpg"
// react-icons
import {FaInstagram, FaTwitter} from 'react-icons/fa'
// react-alice-carousel


export default function About() {
    return (
        <Fragment>
            <div className="about-wrapper">
                <div className="card-zero zero">
                    <h4
                        className="text-overlay"
                        style={{
                        color: "#438b8e",
                        fontSize: "50px"
                    }}>About</h4>
                    <Image
                        src={dashPhoto}
                        alt="dashPhoto"
                        width={100}
                        height={100}
                        className="dash-photo"/>
                </div>
                <div className="bio aboutOne">
                    <p className="bioFont">
                        From California to Texas we bring you the best mini-pancakes in town! We use
                        premium ingredient in our products and as-always the best service you can find.
                        <br/>
                        <br/>
                        Find us in your local markets on Saturday and Sundays or at our residential
                        location -
                        <a
                            href="https://www.google.com/maps/dir/29.4179634,-98.492103/smack's+chicken+shack/@29.4886624,-98.644598,12.32z/data=!3m1!5s0x865c5f7423eb1d29:0xd2d10a5ccc60c61f!4m9!4m8!1m0!1m5!1m1!1s0x865c5f74237e290f:0x5219370747d9f628!2m2!1d-98.5012387!2d29.4667421!3e0"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="smacks">Smacks Chicken Shack</a>.
                    </p>
                </div>
                <div className="connect aboutTwo">
                    <div>
                        <div>
                            <h4>Lets Connect</h4>
                        </div>
                        <div className="icons">
                            <a href="https://www.instagram.com/shortystacks_sa/" rel="noopener noreferrer" target="_blank"><FaInstagram style={{
            color: "#438b8e"
        }}/></a>
                            <a href="https://twitter.com/shortystacks_sa?lang=en" rel="noopener noreferrer" target="_blank"><FaTwitter style={{
            color: "#438b8e"
        }}/></a>
                        </div>
                    </div>
                </div>
                {/* <div className="aboutThree">
              <p>image gallery</p>
                </div> */}
            </div>
        </Fragment>
    );
}
