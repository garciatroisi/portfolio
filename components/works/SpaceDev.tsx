import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const SpaceDev = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Blockchain Integrations Engineer
        <span className="text-textGreen tracking-wide">@SpaceDev</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        April 2024 – Present
      </p>
      {/* Short-term projects section with subtitle and simple list */}
      <h4 className="font-semibold text-lg mt-6 mb-2 text-textGreen">
        Short-term projects
      </h4>
      <ul className="flex flex-col gap-2 mb-4">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Solidity/Hardhat permissioned ERC20 wrapper for UniformLabs, which
          consisted of generating wrapped tokens for trading and DeFi.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Migration of the ApeBond vesting bond system from EVM to Solana with
          Rust/Anchor, based on EIP-5725.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Migration of UFC Strike Moments from Flow to Aptos: 1.5 million NFTs
          to migrate. The process involved the development of a Move module,
          enhancement of metadata, and adoption of Aptos&apos;s new Digital
          Asset Standard.
        </li>
      </ul>
      {/* Acme project section with subtitle and simple list */}
      <h4 className="font-semibold text-lg mt-6 mb-2 text-textGreen">
        Acme (April 2024 – February 2025, within SpaceDev)
      </h4>
      <ul className="flex flex-col gap-2">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Played a key role in developing a startup focused on enabling users to
          acquire cryptocurrencies without the need for wallets.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led the integration of multiple tools, including Jupiter, Li.Fi, and
          deBridge, to facilitate cross-chain EVM/Solana purchases.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked with Web3Auth, Thirdweb, Safe, Gelato, Cloudflare, and a tech
          stack including Node API, Prisma and Postgres.
        </li>
      </ul>
    </motion.div>
  );
};

export default SpaceDev;
