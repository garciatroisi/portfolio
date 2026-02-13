import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const TheSandbox = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Blockchain Integrations Engineer
        <span className="text-textGreen tracking-wide">@TheSandbox</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2022 – April 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Hired as a Senior backend engineer, I developed multiple features with complex logic in the main API,
          and worked on the blockchain team developing smart contracts integrations, achieving key advancements.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Used IPFS, OZD, TheGraph, Solidity, Hardhat, Web3, Ethers, MetaMask, Tenderly, Alchemy, Infura,
          and active engagement with the EVM ecosystem, among other technologies
        </li>
      </ul>
    </motion.div>
  );
};

export default TheSandbox;
