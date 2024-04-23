import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Sonda = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Software Engineer
        <span className="text-textGreen tracking-wide">@Sonda</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        November 2013 – February 2014
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          During my brief time at SONDA, I made significant contributions to the real estate management system and various data update processes.
          Afterward, I decided to accept the challenge at UTE.
        </li>
      </ul>
    </motion.div>
  );
};

export default Sonda;
