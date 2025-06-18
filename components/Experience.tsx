import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ANCAP from "./works/ANCAP";
import Sonda from "./works/Sonda";
import UTE from "./works/UTE";
import TheSandbox from "./works/TheSandbox";
import SpaceDev from "./works/SpaceDev";

const Experience = () => {
  const [workSpaceDev, setWorkSpaceDev] = useState(true);
  const [workSandbox, setWorkSandbox] = useState(false);
  const [workUTE, setWorkUTE] = useState(false);
  const [workSonda, setWorkSonda] = useState(false);
  const [workANCAP, setWorkANCAP] = useState(false);

  const handleSpaceDev = () => {
    setWorkSpaceDev(true);
    setWorkSandbox(false);
    setWorkUTE(false);
    setWorkSonda(false);
    setWorkANCAP(false);
  };
  const handleSandbox = () => {
    setWorkSandbox(true);
    setWorkSpaceDev(false);
    setWorkUTE(false);
    setWorkSonda(false);
    setWorkANCAP(false);
  };
  const handleUTE = () => {
    setWorkSandbox(false);
    setWorkSpaceDev(false);
    setWorkUTE(true);
    setWorkSonda(false);
    setWorkANCAP(false);
  };
  const handleSonda = () => {
    setWorkSandbox(false);
    setWorkSpaceDev(false);
    setWorkUTE(false);
    setWorkSonda(true);
    setWorkANCAP(false);
  };
  const handleANCAP = () => {
    setWorkSandbox(false);
    setWorkSpaceDev(false);
    setWorkUTE(false);
    setWorkSonda(false);
    setWorkANCAP(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-28 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleSpaceDev}
            className={`${
              workSpaceDev
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            SpaceDev
          </li>
          <li
            onClick={handleSandbox}
            className={`${
              workSandbox
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            The Sandbox
          </li>
          <li
            onClick={handleUTE}
            className={`${
              workUTE
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            UTE
          </li>
          <li
            onClick={handleSonda}
            className={`${
              workSonda
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Sonda
          </li>
          <li
            onClick={handleANCAP}
            className={`${
              workANCAP
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            ANCAP
          </li>
        </ul>
        {workSpaceDev && <SpaceDev />}
        {workSandbox && <TheSandbox />}
        {workUTE && <UTE />}
        {workSonda && <Sonda />}
        {workANCAP && <ANCAP />}
      </div>
    </section>
  );
};

export default Experience;
