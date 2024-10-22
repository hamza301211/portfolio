import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({ type, time, place, info, image }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl text-light sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-light md:text-sm">{info}</p>
        <a className="text-primaryDark" href={image} target="_blank">
          Show Certificate
        </a>
      </motion.div>
    </li>
  );
};

const Certifications = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-10 mb-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-light md:text-6xl xs:text-4xl md:mb-16">
        Certifications
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="IBM Full-Stack JavaScript Developer"
            time="2024"
            place="IBM"
            info="an online non-credit course authorized by IBM and offered through Coursera."
            image="/Full Stack Developer.pdf"
          />
          <Details
            type="Application Development using Microservices and Serverless "
            time="2024"
            place="IBM"
            info="an online non-credit course authorized by IBM and offered through Coursera."
            image="/Microservices & serverless Certificate.pdf"
          />
          <Details
            type="Get Started with Cloud Native, DevOps, Agile, and NoSQL "
            time="2024"
            place="IBM"
            info="an online non-credit course authorized by IBM and offered through Coursera."
            image="/Cloud Development Certificate.pdf"
          />
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
