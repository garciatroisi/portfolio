import tsbImg from "@/public/assets/images/tsb.jpg";
import faoImg from "@/public/assets/images/faoImg.png";
import fightidImg from "@/public/assets/images/fightid.jpg";
import swaps from "@/public/assets/images/swaps.png";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-28">
      <SectionTitle title="Some Achievements I'm Proud Of" titleNo="03" />
      {/* ============ FightID Project Start here ================ */}
      <div className="w-full flex flex-col xl:flex-row gap-6 mb-28 mt-10">
        <div className="w-full xl:w-1/2 h-[350px] relative overflow-hidden rounded-lg bg-black">
          <Image
            className="w-full h-full object-cover"
            src={fightidImg}
            alt="fightIdImg"
            fill
          />
        </div>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">FightID</h3>
          </div>
          <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Led{" "}
            <span className="text-textGreen">multi-chain blockchain development</span>{" "}
            across EVM and Solana, delivering 6+ production smart contracts and
            3M+ on-chain transactions. Built the infrastructure for the $FIGHT
            token TGE with multi-exchange listings including Binance, Coinbase,
            KuCoin, OpenSea, MEXC, and Jupiter.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>Solidity</li>
            <li>Rust</li>
            <li>Solana</li>
            <li>EVM</li>
            <li>Foundry</li>
            <li>Anchor</li>
          </ul>
          <div className="text-2xl flex gap-4">
          </div>
        </div>
      </div>
      {/* ============ FightID Project End here ================== */}
      {/* ============ Acme Cross Chain Swaps Project Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={swaps}
                alt="swapsImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Acme Cross Chain Swaps</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Developed a{" "}
              <span className="text-textGreen">cross-chain swap platform</span>{" "}
              for Acme, enabling users to seamlessly swap assets between EVM and
              Solana chains. The project included deep integrations with Jupiter,
              Li.Fi, deBridge, along with multiple workarounds to enable users to
              swap tokens across chains without requiring native currency.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Jupiter</li>
              <li>Li.Fi</li>
              <li>deBridge</li>
              <li>Safe</li>
              <li>Gelato</li>
              <li>Solana</li>
              <li>EVM</li>
            </ul>
            <div className="text-2xl flex gap-4">
            </div>
          </div>
        </div>
        {/* ============ Acme Cross Chain Swaps Project End here ================== */}
        {/* ============ project One Start here ================ */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://opensea.io/collection/the-sandbox-s-assets/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={tsbImg}
                alt="tsbImg"
              />
              <div className="absolute w-full h-full bg-textGreen/5 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">The Sandbox Assets L2</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Transferred The Sandbox&apos;s assets system from Ethereum&apos;s
              (L1) to Polygon (L2), introducing significant and{" "}
              <span className="text-textGreen">
                disruptive costs improvements
              </span>
              . This migration was driven by the realization that Ethereum fees
              were surpassing the actual value of the assets themselves. The
              project involved the{" "}
              <span className="text-textGreen">
                design and integration of multiple contracts.
              </span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Solidity</li>
              <li>Web3.js</li>
              <li>Ethers.js</li>
              <li>IPFS</li>
              <li>ERC1155</li>
              <li>EIP712</li>
              <li>Node.js</li>
              <li>Sequelize</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://opensea.io/collection/the-sandbox-s-assets/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Image
                className="w-full h-full object-contain"
                src={faoImg}
                alt="faoImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                UTE FAO (Advanced Operations Functions)
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              This project implemented the{" "}
              <span className="text-textGreen">
                first automatic remote network reconnection system in LATAM
              </span>
              . In collaboration with EDF (Électricité de France) consultancy,
              we implemented a system that detects faults, isolates them, and
              reconnects them. It also included a highly enriching stay in
              France.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>C#</li>
              <li>WCF</li>
              <li>WPF</li>
              <li>Sql Server</li>
            </ul>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
