import React from "react";
import { AiOutlineLike } from "react-icons/ai";

const SoftSkillsList = () => {
  return (
    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2">
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiOutlineLike />
        </span>
        Strategic decision-maker and problem-solving
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiOutlineLike />
        </span>
        Critical thinking and analytical mindset
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiOutlineLike />
        </span>
        Ability to work independently as well as part of a team
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiOutlineLike />
        </span>
        Impeccable time management
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiOutlineLike />
        </span>
        Planner, organized, and proactive
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiOutlineLike />
        </span>
        Flexibility to adapt to changing environments
      </li>
      <li className="flex items-center gap-2">
        <span className="text-textGreen">
          <AiOutlineLike />
        </span>
        Ability to prioritize
      </li>
    </ul>
  );
};

export default SoftSkillsList;
