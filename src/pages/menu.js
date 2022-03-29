import React, {Fragment} from "react";
// custom css
import "./css/menu.css"
// react-bootstrap
import {Image} from 'react-bootstrap'
import {Helmet} from "react-helmet"
import Footer from "../components/footer/Footer";


export default function Menu() {
    return (
        <Fragment>
            <Helmet>
                <title>Menu | Mini Pancakes San Antonio</title>
                <meta name="description" content="Build your own stacks! Choose your quantity and toppings and enjoy. Visit us in-side Smacks Chicken Shack every weekend."/>
            </Helmet>
            <div className="menu-wrapper">
                <div className="card-zero zero">
                    <h4
                        className="text-overlay"
                        style={{
                        color: "#fecf24",
                        fontSize: "50px"
                    }}>Menu</h4>
                    {/* <Image
                        src={dashPhoto}
                        alt="dashPhoto"
                        width={100}
                        height={100}
                        className="dash-photo"/> */}
                </div>
                <div className="card one">
                    <div>
                        <h4 className="title">Stacks</h4>
                    </div>
                    <div className="menu-display">
                        <div className="numbers-display">
                            <p className="numbers ">15</p>
                            <p className="numbers">30</p>
                            <p className="numbers">60</p>
                        </div>
                        <div className="numbers-display">
                            <p className="prices">$7.00</p>
                            <p className="prices">$12.00</p>
                            <p className="prices">$20.00</p>
                        </div>
                    </div>
                </div>
                <div className="card two">
                    <div>
                        <h4 className="title">Toppings</h4>

                    </div>
                    <div className="toppings">
                        <div className="toppings-one">
                            <p className="toppingFont">Marshmallows</p>
                            <p className="toppingFont">Sprinkles</p>
                            <p className="toppingFont">Pecans</p>
                            <p className="toppingFont">Fruity Pebbles</p>
                            <p className="toppingFont">Lucky Charms</p>
                            <p className="toppingFont">Powdered Sugar</p>
                            <p className="toppingFont">Chocolate Chips</p>
                            <p className="toppingFont">Crushed Oreo's</p>
                        </div>
                        <div className="toppings-two">
                            <p className="toppingFont">Almonds</p>
                            <p className="toppingFont">Mini Reese's</p>
                            <p className="toppingFont">Shredded Coconut</p>
                            <p className="toppingFont">Crushed Butterfingers</p>
                            <p className="toppingFont">Circus Animal Cookies</p>
                            <p className="toppingFont">Crushed Gram Crackers</p>
                            <p className="toppingFont">Cinnamon Toast Crunch</p>
                        </div>
                    </div>
                </div>
                <div className="card three">
                    <div>
                        <h4 className="title">Sauces</h4>
                    </div>
                    <div>
                        <p className="sauceFont">Nutella</p>
                        <p className="sauceFont">Caramel</p>
                        <p className="sauceFont">Strawberry Syrup</p>
                        <p className="sauceFont">Blueberry Syrup</p>
                        <p className="sauceFont">Chocolate Syrup</p>
                        <p className="sauceFont">Condensed Milk</p>
                        <p className="sauceFont">Maple Syrup</p>
                    </div>
                </div>
                <div className="card four">
                    <div>
                        <h4 className="title">Agua Fresca</h4>
                        <div className="extras">
                            <p>1 x $5.00</p>
                            <p>2 x $8.00</p>
                        </div>
                    </div>
                    <div className="fresca">
                        <p className="toppingFont">Agua De Pina</p>
                        <p className="toppingFont">Agua De Sandia</p>
                    </div>
                </div>
                <div className="card five">
                    <div>
                        <h4 className="title">Fruit Toppings</h4>
                        <div className="extras">
                            <p>15 + $1.00</p>
                            <p>30 + $2.00</p>
                            <p>60 + $3.00</p>
                        </div>
                        <div className="toppings-fruit">
                            <p className="toppingFont">Strawberry</p>
                            <p className="toppingFont">Blueberry</p>
                            <p className="toppingFont">Bananas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageWrapper">
            </div>
            <Footer/>
        </Fragment>
    );
}
