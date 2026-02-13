import Banner from "@/components/Banner";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import { useCallback, useRef } from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Archive = dynamic(() => import("@/components/Archive"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const IntroAnimation = dynamic(() => import("@/components/IntroAnimation"), {
  ssr: false,
});

const sectionReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      mainRef.current?.style.setProperty("--mouse-x", `${e.clientX}px`);
      mainRef.current?.style.setProperty("--mouse-y", `${e.clientY}px`);
    },
    []
  );

  return (
    <>
      <Head>
        <title>Diego Garcia</title>
        <meta name="description" content="Portfolio next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <IntroAnimation />
      <main
        ref={mainRef}
        onMouseMove={handleMouseMove}
        className="spotlight-container w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60"
      >
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4">
            <Banner />
            <motion.div {...sectionReveal}>
              <About />
            </motion.div>
            <motion.div {...sectionReveal}>
              <Experience />
            </motion.div>
            <motion.div {...sectionReveal}>
              <Projects />
            </motion.div>
            <motion.div {...sectionReveal}>
              <Archive />
            </motion.div>
            <motion.div {...sectionReveal}>
              <Contact />
            </motion.div>
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
