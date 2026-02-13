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
        Blockchain Engineer
        <span className="text-textGreen tracking-wide">@SpaceDev</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        April 2024 – Present
      </p>
      {/* FightID project section */}
      <h4 className="font-semibold text-lg mt-6 mb-2 text-textGreen">
        FightID
      </h4>
      <ul className="flex flex-col gap-2 mb-4">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led multi-chain blockchain development across EVM and Solana,
          delivering 6+ production smart contracts for large-scale community
          engagement.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built backend API infrastructure and complex Web3 integrations
          supporting the $FIGHT token TGE and multi-exchange listings.
        </li>
      </ul>
      {/* UFC Strike project section */}
      <h4 className="font-semibold text-lg mt-6 mb-2 text-textGreen">
        UFC Strike
      </h4>
      <ul className="flex flex-col gap-2 mb-4">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led migration of 1.5M NFTs and 100k wallets from Flow to Aptos,
          designing the architecture to permanently burn on Flow and mint on
          Aptos.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed new digital asset collections on Aptos with metadata under
          highest quality standards, adopting Aptos&apos;s new Digital Asset
          Standard.
        </li>
      </ul>
      {/* Short-term projects section */}
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
      </ul>
      {/* Acme project section */}
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
          stack including TypeScript and React.
        </li>
      </ul>
    </motion.div>
  );
};

export default SpaceDev;
