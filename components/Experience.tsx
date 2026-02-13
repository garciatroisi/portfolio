import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ANCAP from "./works/ANCAP";
import Sonda from "./works/Sonda";
import UTE from "./works/UTE";
import TheSandbox from "./works/TheSandbox";
import SpaceDev from "./works/SpaceDev";

type WorkKey = "SpaceDev" | "Sandbox" | "UTE" | "Sonda" | "ANCAP";

const workComponents: Record<WorkKey, React.ComponentType> = {
  SpaceDev,
  Sandbox: TheSandbox,
  UTE,
  Sonda,
  ANCAP,
};

const workLabels: { key: WorkKey; label: string }[] = [
  { key: "SpaceDev", label: "SpaceDev" },
  { key: "Sandbox", label: "The Sandbox" },
  { key: "UTE", label: "UTE" },
  { key: "Sonda", label: "Sonda" },
  { key: "ANCAP", label: "ANCAP" },
];

const Experience = () => {
  const [activeWork, setActiveWork] = useState<WorkKey>("SpaceDev");

  const ActiveComponent = workComponents[activeWork];

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-28 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {workLabels.map(({ key, label }) => (
            <li
              key={key}
              onClick={() => setActiveWork(key)}
              className={`${
                activeWork === key
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              {label}
            </li>
          ))}
        </ul>
        <ActiveComponent />
      </div>
    </section>
  );
};

export default Experience;
