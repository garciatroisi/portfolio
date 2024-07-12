import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Institucional = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">
          Desarrollo Institucional
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Impulsando el Crecimiento y la Excelencia Deportiva
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Con una visi&oacute;n innovadora y una estrategia integral, trabajamos
          estrechamente con clubes y academias para fortalecer sus estructuras
          deportivas y administrativas. Proveemos asesoramiento experto,
          recursos y tecnolog&iacute;a de punta para mejorar sus capacidades
          operativas y competitivas.
        </li>
      </ul>
    </motion.div>
  );
};

export default Institucional;
