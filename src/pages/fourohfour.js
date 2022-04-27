import React, {Fragment} from "react";
// custom components
import Marquee from "../components/marquee/Marquee";
import AnimatedPage from "../AnimatedPage";
export default function FourOhFour() {
    return (
        <Fragment>
            <AnimatedPage>
                <div className="container">
                    <div style={{
                        paddingTop: '15%'
                    }}>
                        <h1 style={{color: "#000"}}>404 Error</h1>
                        <p>Please return home</p>
                    </div>
                </div>
            </AnimatedPage>
        </Fragment>
    );
}
