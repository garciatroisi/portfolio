import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="The Sandbox Catlaysts"
          des="To mint assets, the sandbox used an ERC20 (SAND). When we moved to Polygon, 
               we added a token ERC1155 to mint the assets. 
               Catalysts determine the tier of each asset."
          listItem={["Solidity", "IPFS", "Node", "MySQL"]}
          link="https://opensea.io/collection/the-sandbox-s-catalysts"
        />
        <ArchiveCard
          title="Asset Metadata Migration"
          des=" We migrated our assets, added a new trait, and included a 
              link to the Terms of Use in the metadata description.
              This involved generating new IPFS hashes, updating the database, and using scripts to impact the blockchain."
          listItem={["Ethers", "Multicall", "OZDRelayer"]}
          link="https://polygonscan.com/tx/0xca8f0a89e3920bec54b4ca56c6030317049913bbaa5f727f19497a77577d12f4"
        />
        <ArchiveCard
          title="Generic sales contract integration"
          des=" Transitioned the exchange through a generic sales contract 
                to enable seamless asset trading, fees, and royalty generation"
          listItem={["Solidity", "Web3", "Node", "MySQL"]}
          link="https://www.sandbox.game/en/shop/"
        />
        <ArchiveCard
          title="Ths Sandbox Staking Dashboard"
          des=" Worked on the ADR to select ECharts. Then, we generated the graphs
                to display the evolution of SAND and the floor price of the lands."
          listItem={["Solidity", "Web3", "Node", "MySQL"]}
          link="https://www.sandbox.game/en/me/staking/"
        />
        <ArchiveCard
          title="Tokenomics API Service"
          des=" Worked on a service that generates currency conversions for SAND/USDT,
                MATIC/USDT, and TOKEN/USDT, introducing a fallback by integrating Coingecko and portals.io"
          listItem={["Node", "Http", "Web3"]}
          link="https://api.sandbox.game/tokenomics/token-usd-value?contractAddress=0x3845badade8e6dff049820680d1f14bd3903a5d0"
        />
        <ArchiveCard
          title="Staking Ranking"
          des=" Worked on the staking ranking system that scores 
                users based on the amount and duration they are staking in a pool"
          listItem={["Node", "Http", "TheGraph"]}
          link="https://api.thegraph.com/subgraphs/name/sandboxthegraph/staking-score-polygon"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Hoy que hago? app."
                des=" A Capacitor + Angular app with a Firebase backend, serving 2000 users. 
                Was created to showcase monthly under activities schedule.
                It was launched for iOS and Android but was decommissioned today due to maintenance issues"
                listItem={["Capacitor", "Angular", "Firebase"]}
                link="https://www.facebook.com/hoyquehago"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="TabladosUy app."
                des=" A Capacitor + Angular app with a Firebase backend, serving 5000 users,
                was created to showcase the monthly schedule of carnival events in Uruguay. 
                It was launched for iOS and Android but was decommissioned today due to maintenance issues."
                listItem={["Capacitor", "Angular", "Firebase"]}
                link="https://www.facebook.com/tabladosuy/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="My Portfolio"
                des=" This portfolio. I've worked on many things over these 15 years, 
                      and many of them don't have public references. Someday, I'll add their stories."
                listItem={["React", "Tailwind CSS"]}
                link=""
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
