import React, {Fragment} from "react";
// routing
import {Routes, Route, useLocation} from "react-router-dom";
// custom components
import Navigation from "./components/navigation/nav";
import Footer from "./components/footer/Footer"
// routes pages
import Main from "./pages/main";
import FourOhFour from "./pages/fourohfour"
// animation
import {AnimatePresence} from 'framer-motion';


function App() {

    const location = useLocation();


    return (

        <Fragment>
            <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={< Navigation />}>
                    <Route index element={ <Main/>}/>
                    <Route path="*" element={FourOhFour}/>
                </Route>
            </Routes>
            </AnimatePresence>
            <Footer/>
        </Fragment>

    );
}

export default App;
