import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "@/components/LiIcon";
import Education from "@/components/Education";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import Certifications from "@/components/Certifications";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-light">
          {position}&nbsp;{" "}
          <a
            target="_blank"
            className=" text-primaryDark capitalize"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-light md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <Head>
        <title>Hamza Nadeem | Experiences</title>
        <meta name="description" content="experiences of hamza" />
      </Head>
      <TransitionEffect />
      <div className="mt-10 mb-32">
        <h2 className="font-bold text-8xl mb-32 w-full text-center text-light md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full origin-top bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Associate Software Engineer"
              company="Innovage.io"
              companyLink="https://innovage.io/"
              time="2023-2024"
              address="881-C Faisal Town,
                Lahore, Pakistan"
              work="Worked as an Associate Software Engineer on a procurement and financial solutions project, leveraging the MERN stack (MongoDB, Express.js, React, Node.js) to develop robust, full-stack applications. Integrated AWS technologies such as S3 Bucket for storage, AWS Lambda for serverless computing, and AWS EC2 for scalable infrastructure. Implemented CI/CD pipelines using GitHub Actions to streamline development, testing, and deployment processes, ensuring efficient and automated delivery of software solutions. Collaborated with cross-functional teams to deliver high-performance and scalable systems for business-critical applications."
            />
            <Details
              position="Senior Software Engineer"
              company="Tekvill Solutions"
              companyLink="https://tekvill.com/"
              time="2024 - Present"
              address="Hybrid"
              work="Led a major refactoring effort to modernize legacy Node.js codebases, improving maintainability, reducing technical debt, and ensuring compliance with modern coding standards. Integrated third-party APIs into MERN stack applications, such as payment processing and geolocation services, to extend functionality and enhance user experience, ensuring seamless interoperability and reliability across platforms. Managed projects using Agile methodologies, ensuring timely, high-quality delivery through effective sprint planning and boosting team performance by up to 35%."
            />
            {/* <Details 
                position="Associate Software Engineer"
                company="Innovage.io"
                companyLink="https://innovage.io/"
                time="2023-Present"
                address="881-C Faisal Town,
                Lahore, Pakistan"
                work="Working on full stack applications with innovation in technology as of moving from ReactJS to NextJS."
                /> */}
          </ul>
        </div>
      </div>
      <Certifications />
      <Education />
    </>
  );
};

export default Experience;
