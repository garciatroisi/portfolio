import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const DesarrolloTalento = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer
        <span className="text-textGreen tracking-wide">
          Desarrollo de Talento
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Experiencia con muchos casos de &eacute;xito
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Descubrimos y formamos a los futbolistas j&oacute;venes con mayor
          potencial, proporcion&aacute;ndoles la mejor formaci&oacute;n,
          entrenamiento y exposici&oacute;n necesarios para destacar en el
          &aacute;mbito profesional.
        </li>
      </ul>
    </motion.div>
  );
};

export default DesarrolloTalento;
