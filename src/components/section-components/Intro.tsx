import useRole from "@/src/hook/useRole";
import { ChevronDown } from "lucide-react";
import React from "react";

const Intro = () => {
  const { role } = useRole();

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between items-stretch w-full h-[calc(100vh-20rem)]">
      <div className="">
        {/* Name + Content */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center gap-20">
            <div className="text-font-color">
              <span className="text-6xl">+300</span>
              <h2>Project Completed</h2>
            </div>
            <div className="text-font-color">
              <span className="text-6xl">+50</span>
              <h2>Startup raised</h2>
            </div>
          </div>
          <div className="text-font-color">
            <h1 className="text-[200px] leading-40">Hello!</h1>
            <p className="text-3xl font-extralight">- It's Ku Kue, {role}.</p>
          </div>
          <div>
            <button className="text-font-color">
              Scroll Down.
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
      {/* My Picture */}
      <div className="w-150 border">
        {/* <Image src={myPicture} alt="My Picture" className="w-150" /> */}
      </div>
    </div>
  );
};

export default Intro;
