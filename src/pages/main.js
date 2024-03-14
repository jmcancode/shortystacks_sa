import React, { Fragment } from "react";
// custom css
import "./css/main.css";
// cookies consented
import CookieConsent from "react-cookie-consent";
// react-bootstrap
import { Carousel, Table } from "react-bootstrap";
// images import imageOne from
// "../assets/F929B72D-7296-45AC-89B5-0EE8B8F8AE97.JPG"
import carouselImgOne from "../assets/64432D68-8CBF-4A58-A86D-5C61420DEEAA.JPG";
import carouselImgTwo from "../assets/graves.jpeg";
import carouselImgThree from "../assets/strawbettry.jpeg";

// react-icons
import { AiOutlineDown } from "react-icons/ai";
// animations
import AnimatedPage from "../AnimatedPage";

export default function Main() {
  return (
    <Fragment>
      <AnimatedPage>
        {/* Cooke Consent */}
        <CookieConsent
          location="bottom"
          buttonText="okay, sure!"
          acceptOnScroll={true}
          acceptOnScrollPercentage={50}
          onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling) {
              alert("By scrolling, you've accepted out web app cookie.");
            } else {
              console.log("Accept was triggered by clicking the Accept button");
            }
          }}
          cookieName="shorties-cookie"
          style={{
            background: "#438b8e",
            zIndex: 19000,
          }}
          buttonStyle={{
            color: "#fff",
            backgroundColor: "#fecf24",
            fontSize: "13px",
          }}
          expires={360}
        >
          This website uses cookies to enhance the user experience.{" "}
        </CookieConsent>
        {/* Landing Page */}
        <section>
          <div className="landing">
            <div>
              <div>
                <Carousel fade indicators={false} controls={false}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 firstImage"
                      src={carouselImgOne}
                      alt="First slide"
                    />
                    <Carousel.Caption className="view-menu">
                      <h4>View menu</h4>
                      <AiOutlineDown size={20} />
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 firstImage"
                      src={carouselImgTwo}
                      alt="Second slide"
                    />
                    <Carousel.Caption className="view-menu">
                      <h4>View menu</h4>
                      <AiOutlineDown size={20} />
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 firstImage"
                      src={carouselImgThree}
                      alt="Third slide"
                    />
                    <Carousel.Caption className="view-menu">
                      <h5>View menu</h5>
                      <a className="view" href="#menu">
                        <AiOutlineDown size={20} />
                      </a>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        {/* About Us */}
        <div>
          <div>
            <section className="about-description-container">
              <div className="about-us">
                <small className="text-center about-description p-5">
                  Shorty Stacks brings a curated menu inspired by Los Angeles
                  street vendor culture to San Antonio. The menu features three
                  aguas frescas, as well as an assortment of mini pancakes both
                  sweet and savory.
                  <br />
                  <br />
                  We take pride in our handmade product made with local
                  ingredients and lots of love.
                </small>
              </div>
            </section>
          </div>
          {/* Start Menu */}
          <div className="cafe-grid" id="menu">
            {/* <div className="carousel-wrapper">
                        <div className="cafe-carousel swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="image-square">
                                        <img src={imageOne} alt="imageOne"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
            <div className="menu-section">
              <div className="single-menu">
                <h2>Aguas Frescas</h2>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>1 x $5.00</td>
                    </tr>
                    <tr>
                      <td>Agua de Pina</td>
                    </tr>
                    <tr>
                      <td>Agua de Sandia</td>
                    </tr>
                    <tr>
                      <td>Agua Fresca</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="single-menu">
                <h2>Stacks</h2>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>15</td>
                      <td>$8.00</td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td>$12.00</td>
                    </tr>
                    <tr>
                      <td>60</td>
                      <td>$20.00</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="single-menu">
                <h2>
                  Sliders
                  <small
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    (Two cakes, Sausage, Egg & Cheese)
                  </small>
                </h2>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>4</td>
                      <td>$6.00</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>$10.00</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>$14.00</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="single-menu">
                <h2>Toppings</h2>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>Marshmallows</td>
                      <td>Sprinkles</td>
                      <td>Pecans</td>
                    </tr>
                    <tr>
                      <td>Fruit Pebbles</td>
                      <td>Lucky Charms</td>
                      <td>Powdered Sugar</td>
                    </tr>
                    <tr>
                      <td>Chocolate Chips</td>
                      <td>Crushed Oreo's</td>
                      <td>Almonds</td>
                    </tr>
                    <tr>
                      <td>Mini Reese's</td>
                      <td>Shredded Coconut</td>
                      <td>Crushed Butterfingers</td>
                    </tr>
                    <tr>
                      <td>Circus Animal Cookies</td>
                      <td>Crushed Gram Crackers</td>
                      <td>Cinnamon Toast Crunch</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="single-menu">
                <h2>
                  Fruit Toppings
                  <small
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    (15 x $1 , 30 x $2, 60 x $3)
                  </small>
                </h2>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>Strawberry</td>
                    </tr>
                    <tr>
                      <td>Bananas</td>
                    </tr>
                    <tr>
                      <td>Blueberry's</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="single-menu">
                <h2>Sauces</h2>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>Nutella</td>
                      <td>Caramel</td>
                    </tr>
                    <tr>
                      <td>Strawberry Syrup</td>
                      <td>Blueberry Syrup</td>
                    </tr>
                    <tr>
                      <td>Chocolate Syrup</td>
                      <td>Maple Syrup</td>
                    </tr>
                    <tr>
                      <td>Condensed Milk</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </Fragment>
  );
}
