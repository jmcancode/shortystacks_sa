import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";

import "./Marquee.css";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee">
        {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            Loading... Loading.... Loading...Loading... Loading....
            Loading...Loading... Loading.... Loading...{" "}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
