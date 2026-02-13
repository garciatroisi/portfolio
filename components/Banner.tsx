import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import logoSpacedev from "@/public/assets/images/logos/spacedev.jpeg";
import logoSandbox from "@/public/assets/images/logos/sandbox.png";
import logoUte from "@/public/assets/images/logos/ute.png";
import logoSonda from "@/public/assets/images/logos/sonda.png";
import logoAncap from "@/public/assets/images/logos/ancap.png";

const experiences: { company: string; role: string; period: string; logo: StaticImageData }[] = [
  { company: "SpaceDev", role: "Blockchain Engineer", period: "2024 - Present", logo: logoSpacedev },
  { company: "The Sandbox", role: "Sr Backend Engineer", period: "2022 - 2024", logo: logoSandbox },
  { company: "UTE", role: "Software Engineer", period: "2014 - 2022", logo: logoUte },
  { company: "Sonda", role: "Software Engineer", period: "2013 - 2014", logo: logoSonda },
  { company: "ANCAP", role: "IT Analyst", period: "2009 - 2013", logo: logoAncap },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experiences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <div className="flex flex-col lgl:flex-row lgl:items-center lgl:justify-between gap-8">
        {/* Left column */}
        <div className="flex flex-col gap-4 lgl:gap-8">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg font-titleFont tracking-wide text-textGreen"
          >
            garciatroisi.
          </motion.h3>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
          >
            Diego García
            <span className="text-textDark mt-2 lgl:mt-4">
              Blockchain Engineer
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base md:max-w-[650px] text-textDark font-medium"
          >
            15+ years of experience in software solutions, specializing in
            on-chain coding, web3 integrations, and generic API development.
            Strategic decision-maker with a problem-solving and analytical
            mindset, thriving in dynamic environments while continuously
            expanding my skill set.{" "}
            <a
              href="https://www.linkedin.com/in/garciatroisi/"
              target="_blank"
            >
              {" "}
              <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                Explore more.
                <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </a>
          </motion.p>
        </div>

        {/* Right column - experience carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="hidden lgl:flex flex-col items-end shrink-0 w-[280px] h-[160px] relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-end justify-center text-right"
            >
              <Image
                src={experiences[current].logo}
                alt={experiences[current].company}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-textGreen font-titleFont text-sm tracking-widest uppercase mt-3">
                {experiences[current].period}
              </span>
              <h3 className="text-textLight font-titleFont text-2xl font-semibold mt-1">
                {experiences[current].company}
              </h3>
              <p className="text-textDark text-base mt-1">
                {experiences[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="absolute bottom-0 right-0 flex gap-2">
            {experiences.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === current ? "bg-textGreen" : "bg-textDark/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
