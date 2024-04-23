import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const ANCAP = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Software Analyst
        <span className="text-textGreen tracking-wide">@ANCAP</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        March 2029 – November 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed several C# internal apps
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and Developed modules in ESB BizTalk
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Handled the company’s CMS as well as other institutional CMS systems
        </li>
      </ul>
    </motion.div>
  );
};

export default ANCAP;
