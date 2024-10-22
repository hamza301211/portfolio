import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profileImage from "../../public/images/profile/hamza.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import ContactForm from "@/components/ContactForm";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const Contact = () => {
  return (
    <>
      <Head>
        <title>Hamza Nadeem | Contact</title>
        <meta name="description" content="contact page of hamza" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Full Stack Developer"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                If you are looking for a Full-Stack JavaScript developer with a
                strong focus on creating scalable and efficient web
                applications, I’m here to help! I specialize in front-end
                development using React.js and back-end solutions powered by
                Node.js and Express.js, with MongoDB as the database backbone.
              </p>
              <p className="font-medium my-4">
                With my expertise, you’ll get:
                <br /> - A clean and responsive user interface using React.js,
                Tailwind CSS, and Material-UI.
                <br /> - Backend development focused on performance and security
                using Node.js, Express.js, and MongoDB.
                <br />
                - Cloud-native application development, leveraging AWS for
                scalability.
                <br /> - DevOps skills including Docker, Kubernetes, and CI/CD
                pipelines for seamless deployment.
                <br /> - A solid Agile development approach with experience in
                GitHub for version control and collaboration.
              </p>
              <p className="font-medium">
                Whether you need end-to-end development, cloud integration, or
                assistance with Agile methodologies, I’m here to deliver robust
                solutions that meet your business needs. Let's bring your
                project to life!
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid p-8 bg-dark border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light" />
              <Image
                src={profileImage}
                alt="hamza"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Client's Satisfied
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Project's Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years Experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      <AnimatedText
        text="Contact"
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />
      <ContactForm />
    </>
  );
};

export default Contact;
