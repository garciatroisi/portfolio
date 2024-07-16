import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ANCAP from "./works/ANCAP";
import DesarrolloTalento from "./works/DesarrolloTalento";
import UTE from "./works/UTE";
import Institucional from "./works/Institucional";

const Bussines = () => {
  const [workInstitucional, setWorkInstitucional] = useState(true);
  const [workUTE, setWorkUTE] = useState(false);
  const [workDesarrolloTalento, setWorkDesarrolloTalento] = useState(false);
  const [workANCAP, setWorkANCAP] = useState(false);

  const handleInstitucional = () => {
    setWorkInstitucional(true);
    setWorkUTE(false);
    setWorkDesarrolloTalento(false);
    setWorkANCAP(false);
  };
  const handleUTE = () => {
    setWorkInstitucional(false);
    setWorkUTE(true);
    setWorkDesarrolloTalento(false);
    setWorkANCAP(false);
  };
  const handleDesarrolloTalento = () => {
    setWorkInstitucional(false);
    setWorkUTE(false);
    setWorkDesarrolloTalento(true);
    setWorkANCAP(false);
  };
  const handleANCAP = () => {
    setWorkInstitucional(false);
    setWorkUTE(false);
    setWorkDesarrolloTalento(false);
    setWorkANCAP(true);
  };
  return (
    <section
      id="business"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <SectionTitle title="Actividades en PFG" titleNo="01" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
          <ul className="md:w-32 flex flex-col">
            <li
              onClick={handleInstitucional}
              className={`${
                workInstitucional
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              Desarrollo Institucional
            </li>
            <li
              onClick={handleUTE}
              className={`${
                workUTE
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              Direcci&oacute;n t&eacute;cnica
            </li>
            <li
              onClick={handleDesarrolloTalento}
              className={`${
                workDesarrolloTalento
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              Desarrollo de Talento
            </li>
            <li
              onClick={handleANCAP}
              className={`${
                workANCAP
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              Cl&iacute;nicas y Capacitaciones Espec&iacute;ficas
            </li>
          </ul>
          {workInstitucional && <Institucional />}
          {workUTE && <UTE />}
          {workDesarrolloTalento && <DesarrolloTalento />}
          {workANCAP && <ANCAP />}
        </div>
      </motion.div>
    </section>
  );
};

export default Bussines;
