import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';

const HardSkillsList = () => {
  return (
    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2">
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiFillThunderbolt />
        </span>
        JavaScript | TypeScript
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiFillThunderbolt />
        </span>
        Node.js
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiFillThunderbolt />
        </span>
        Web3.js | Ethers.js
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiFillThunderbolt />
        </span>
        Express.js | Swagger
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiFillThunderbolt />
        </span>
        REST | GraphQL | gRPC 
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiFillThunderbolt />
        </span>
        C#
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiFillThunderbolt />
        </span>
        Solidity
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiFillThunderbolt />
        </span>
        MongoDB | SqlServer | MySQL | Redis
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiFillThunderbolt />
        </span>
        React | Vue
      </li>
    </ul>
  );
}

export default HardSkillsList;
