import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import HardSkillsList from "./HardSkillsList";
import SoftSkillsList from "./SoftSkillsList";

const Story = () => {
  return (
    <section
      id="story"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Our Story" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hey there! I am Diego Garcia, a software engineer with over 15 years
            of experience in the field. I graduated with a bachelor&apos;s{" "}
            <span className="text-textGreen">
              degree in software engineering
            </span>{" "}
            in 2012 and later completed my{" "}
            <span className="text-textGreen">master&apos;s degree</span> in
            2017.
          </p>
          <p>
            I consider myself an experienced developer, with a diverse
            background spanning various areas of software development. I&apos;ve
            been diving deep into{" "}
            <span className="text-textGreen">
              back-end, blockchain and web3 technologies
            </span>
            , developing a passion for the decentralized world.
          </p>
          <p>
            Proficient in Agile and Waterfall methodologies, I excel at leading
            projects from conception to deployment, regardless of their scale.
            My skill set includes a{" "}
            <span className="text-textGreen">
              wide range of programming languages and tools
            </span>
            , allowing me to adapt quickly to changing requirements and
            technologies.
          </p>
          <p>
            Throughout my career, I&apos;ve demonstrated a keen ability to stay
            ahead of the curve, embracing emerging technologies and delivering
            high-quality solutions. I have a{" "}
            <span className="text-textGreen">
              knack for developing core logic for critical features and I&apos;m
              proficient in API integrations and development
            </span>
            , scripting, and batch processing.
          </p>
          <p className="text-textLight mt-6">
            Here are a list of soft skills I have gained through my experience:
          </p>
          <SoftSkillsList />
          <p className="text-textLight mt-6">
            Here are a few technologies I have been working with:
          </p>
          <HardSkillsList />
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Story;
