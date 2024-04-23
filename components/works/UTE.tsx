import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const UTE = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer
        <span className="text-textGreen tracking-wide">@UTE</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        February 2014 – July 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Exchanged knowledge in Paris at the headquarters of a consulting firm with EDF, as part of the Uruguay Smart Grid project
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed .NET applications to detect faults, analyze the network, identify reconnection possibilities, and command power stations.
          Additionally, developed applications to visualize and analyze all the information generated in the process.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Maintained and redeveloped SCADA system configuration
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Generated and organized system&apos;s documentation Analytical study of information from BigData
        </li>
      </ul>
    </motion.div>
  );
};

export default UTE;
