import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// Your component code goes here

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden z-[1]`}
    >
      <motion.div
        // variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl z-[1]"
      >
        <form
          // ref={formRef}
          // onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 z-[1]"
        ></form>
      </motion.div>

      <motion.div
        // variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] z-[1]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
