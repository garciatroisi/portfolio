import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Bussines from "@/components/Business";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Community from "@/components/Community";
import Project from "@/components/Project";
import Story from "@/components/Story";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import Archive from "@/components/Archive";

export default function Home() {
  return (
    <>
      <Head>
        <title>PFG</title>
        <meta name="description" content="PFG website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/web/logo.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full absolute left-0 bottom-0 z-10"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4 relative z-0">
            <Banner />
            <Bussines />
            <Project />
            <Community />
            <Archive />
            <Story />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full absolute right-0 bottom-0 z-10"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
