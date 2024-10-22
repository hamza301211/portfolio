import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import exSquares from "../../public/images/projects/exsquares.png";
import malmo from "../../public/images/projects/malmo.png";
import answerCampus from "../../public/images/projects/AnswerCampus.png";
import monoply from "../../public/images/projects/monoply.png";
import kbm from "../../public/images/projects/kbm.png";
import portfolio from "../../public/images/projects/portfolio.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl border border-solid shadow-2xl p-12 rounded-br-2xl bg-dark border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 50vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="font-medium text-xl text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid p-6 relative bg-dark border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="font-medium text-xl text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Hamza Nadeem | Projects</title>
        <meta name="description" content="projects description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Welcome To Projects!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Ex Squares"
                summary="ExSquares(exsquares.co.uk) is a procurement and financial solutions project developed using the MERN stack (MongoDB, Express.js, React, Node.js) to deliver a comprehensive, scalable platform for managing procurement processes and financial transactions. The project integrates AWS technologies, including S3 for storage, AWS Lambda for serverless functionality, and EC2 for scalable infrastructure."
                link="https://exsquares.co.uk/"
                type="Featured Project"
                github="https://github.com/Rapolus87/kbm-remit"
                img={exSquares}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Malmo City Pizzeria"
                link="https://github.com/hamza301211/MalmoCityPizzeria"
                type="Minor Project"
                github="https://github.com/hamza301211/MalmoCityPizzeria"
                img={malmo}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Answer Campus"
                link="https://github.com/hamza301211?tab=repositories"
                type="Minor Project"
                github="https://github.com/hamza301211?tab=repositories"
                img={answerCampus}
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title="KBM Technologies"
                summary="KBM Technologies is a robust application designed for tracking records of invoices and remittances. The system features a separate admin panel for efficient management and oversight. Developed using the MERN stack, it leverages AWS technologies such as S3 Bucket for storage, AWS Lambda for serverless computing, and AWS EC2 for hosting. GitHub Actions is utilized for continuous integration and deployment, ensuring a streamlined development process and reliable performance. This project aims to enhance financial record management and improve operational efficiency for users."
                link="https://kbmbusiness.co.uk/"
                type="Featured Project"
                github="https://github.com/Rapolus87/kbm-payments"
                img={kbm}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio"
                link="https://hamzanadeem.vercel.app/"
                type="Minor Project"
                github="https://github.com/hamza301211/portfolio"
                img={portfolio}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Meta Monoply"
                link="https://github.com/hamza301211?tab=repositories"
                type="Minor Project"
                github="https://github.com/hamza301211?tab=repositories"
                img={monoply}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
