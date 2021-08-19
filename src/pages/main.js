import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Col, Row, Button } from "chalk";

const Landing = () => {
  return (
    <Fragment>
      <motion.div>
        <Row>
          <Col>
            <div>
              <h1>The Best Mini Pancakes in South Texas</h1>
            </div>
            <div>
              <Button>Learn More</Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </motion.div>
    </Fragment>
  );
};

export default Landing;
