import React, { Fragment } from "react";
// routing
import { Routes, Route, useLocation } from "react-router-dom";
// custom components
import Navigation from "./components/navigation/nav";

// routes pages
import Main from "./pages/main";
import FourOhFour from "./pages/fourohfour";
// animation
import { AnimatePresence } from "framer-motion";
import Authenticate from "./pages/authenticate";

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Main />} />
            <Route path="authenticate" element={<Authenticate />} />
            <Route path="*" element={<FourOhFour />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
