import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold py-3 px-6 shadow-dark cursor-pointer absolute text-dark bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const skills = () => {
  return (
    <>
      <Head>
        <title>Hamza Nadeem | Skills</title>
        <meta name="description" content="skills of hamza" />
      </Head>
      <TransitionEffect />
      <h2 className="font-bold text-8xl mt-10 w-full text-center text-light md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularDarkLg md:bg-circularDarkMd sm:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold p-8 shadow-dark cursor-pointer text-dark bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="22vw" y="9vw" />
        <Skill name="MongoDB" x="0vw" y="13vw" />
        <Skill name="ExpressJS" x="-20vw" y="-20vw" />
        <Skill name="NodeJS" x="15vw" y="-11vw" />
        <Skill name="ReactJS" x="32vw" y="-5vw" />
        <Skill name="REST API's" x="0vw" y="-22vw" />
        <Skill name="Git" x="-29vw" y="22vw" />
        <Skill name="CI/CD" x="18vw" y="22vw" />
        <Skill name="AWS" x="-34vw" y="2vw" />
        <Skill name="Docker" x="40vw" y="7vw" />
        <Skill name="Kubernetes" x="-24vw" y="13vw" />
        <Skill name="Tailwind-css" x="-35vw" y="-10vw" />
        <Skill name="Serverless" x="35vw" y="-20vw" />
      </div>
    </>
  );
};

export default skills;
