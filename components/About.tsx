import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

const About = ({}) => (
  <>
    <h2 className={styles.sectionHeadText}>Overview.</h2>

    <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      We are a team of experts in building Stunning User experiences. We deliver UI/UX,
      Full-stack web, mobile, and blockchain application development using
      React,React Native,Wordpress, Firebase, AngularJS, TypeScript, NodeJS, Solidity, and Flutter. Our
      team has a total of 5+ years of experience. We have worked with clients
      from 8+ countries.
    </motion.p>

    <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      𝗪𝗵𝘆 𝗨𝘀
    </motion.p>
    <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      ➤ Fast and Easy - the mission will be accomplished, you can just enjoy the
      delivery and the demos
    </motion.p>
    <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      ➤ Close collaboration - the more you're involved the better the result is
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10"></div>
  </>
);

export default About;
