import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";

export default function Authenticate() {
  return (
    <Fragment>
      <AnimatedPage>
        <section>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <h1>Authenticate</h1>
          </div>
        </section>
        <section>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <h1>Authenticate</h1>
          </div>
        </section>
      </AnimatedPage>
      <Outlet />
    </Fragment>
  );
}
