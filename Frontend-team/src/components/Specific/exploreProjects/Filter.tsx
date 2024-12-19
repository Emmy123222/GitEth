import { useState } from "react";
import Frame from "../../../assets/icons/Frame (2).png";

// Define the shape of the active state
interface ActiveBtnState {
  trending: string;
  experience: string;
  rewards: string;
  projects: string;
  date: string;
  skills: string;
}

interface FilterProps {
  setOpenSide: (isOpen: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({ setOpenSide }) => {
  const [activeBtn, setActiveBtn] = useState<ActiveBtnState>({
    trending: "",
    experience: "",
    rewards: "",
    projects: "",
    date: "",
    skills: "",
  });

  const handleActive = (group: keyof ActiveBtnState, value: string) => {
    setActiveBtn((prev) => ({ ...prev, [group]: value }));
  };

  const getButtonClass = (group: keyof ActiveBtnState, value: string) =>
    activeBtn[group] === value
      ? "bg-blue-600 border-blue-600"
      : "bg-[#101323] border-[#363F72]";

  return (
    <div className="min-h-screen w-auto h-[900px] border border-customBlue gap-24 rounded-[16px] mt-12 p-5">
      <div className="relative">
        <div className="flex items-center justify-between p-4">
          <p className="font-bold">Filters</p>
          <img
            src={Frame}
            alt="Filter Icon"
            onClick={() => setOpenSide(true)}
            className="cursor-pointer"
          />
        </div>
        <p className="ml-4">Find projects tailored to your skills and goals.</p>
        <hr className="mt-6" />
      </div>

      {/* Trending and Most Active */}
      <div className="flex items-center justify-start mt-4 p-6 gap-2">
        {["Trending", "Most Active"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleActive("trending", btn)}
            className={`text-sm text-white p-[8px_16px] rounded-[8px] border hover:opacity-80 ${getButtonClass(
              "trending",
              btn
            )}`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Active Issues */}
      <div className="p-5">
        <button
          onClick={() => handleActive("trending", "Active Issues")}
          className={`text-sm text-white rounded-[8px] border hover:opacity-80 p-[8px_16px] ${getButtonClass(
            "trending",
            "Active Issues"
          )}`}
        >
          Active Issues
        </button>
      </div>

      {/* Experience Level */}
      <div className="flex flex-col space-y-2 p-5">
        <h1 className="text-white text-base font-semibold">Experience Level</h1>
        <div className="flex space-x-2">
          {["Beginner", "Intermediate", "Expert"].map((level) => (
            <button
              key={level}
              onClick={() => handleActive("experience", level)}
              className={`text-sm text-white rounded-[8px] border hover:opacity-80 p-[8px_16px] ${getButtonClass(
                "experience",
                level
              )}`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Rewards */}
      <div className="flex flex-col space-y-2 p-5">
        <h3 className="text-white text-base font-semibold">Rewards</h3>
        <div className="flex space-x-2">
          {["Lowest", "Highest"].map((reward) => (
            <button
              key={reward}
              onClick={() => handleActive("rewards", reward)}
              className={`text-sm text-white rounded-[8px] border hover:opacity-80 p-[8px_16px] ${getButtonClass(
                "rewards",
                reward
              )}`}
            >
              {reward}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Types */}
      <div className="flex flex-col space-y-2 p-5">
        <h3 className="text-white text-base font-semibold">Projects Types</h3>
        <div className="flex space-x-2">
          {["Volunteer", "Funded"].map((type) => (
            <button
              key={type}
              onClick={() => handleActive("projects", type)}
              className={`text-sm text-white rounded-[8px] border hover:opacity-80 p-[8px_16px] ${getButtonClass(
                "projects",
                type
              )}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Date */}
      <div className="flex flex-col space-y-2 p-5">
        <h3 className="text-white text-base font-semibold">Date</h3>
        <div className="flex space-x-2">
          {["Newest first", "Oldest First"].map((date) => (
            <button
              key={date}
              onClick={() => handleActive("date", date)}
              className={`text-sm text-white rounded-[8px] border hover:opacity-80 p-[8px_16px] ${getButtonClass(
                "date",
                date
              )}`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col space-y-3 p-4">
        <h3 className="text-white text-base font-semibold">Skills</h3>
        <div className="grid grid-cols-3 gap-2">
          {["React", "Security", "Community", "UX Design", "Solidity", "Marketing"].map((skill) => (
            <button
              key={skill}
              onClick={() => handleActive("skills", skill)}
              className={`text-sm text-white rounded-[8px] border hover:opacity-80 p-[8px_16px] ${getButtonClass(
                "skills",
                skill
              )}`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
