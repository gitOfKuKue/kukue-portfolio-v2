import { ChevronsRight, CornerDownRight, Earth } from "lucide-react";
import Image from "next/image";
import React from "react";

import myPicture from "@/src/assets/images/my-pic2.svg"
import myPicture2 from "@/src/assets/images/my-pic1.jpg";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-full">
      {/* Content */}
      <div className="relative">
        <h1 className="text-6xl text-font-color">About Me</h1>
        <p className="text-justify text-secondary-font-color text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          totam aut, expedita esse corrupti harum eum veniam nesciunt eos animi,
          voluptatem aspernatur eveniet culpa facilis dolorum repellendus sit
          odio ut!
        </p>
        <CornerDownRight
          size={200}
          className="text-secondary-font-color absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
        />
      </div>

      {/* Strength */}
      <div className="bg-white shadow-xl rounded-(--standard-radius) p-5">
        <Earth size={60} className="text-font-color mb-5" />
        <h1 className="text-6xl text-font-color font-bold">120%</h1>
        <p className="text-secondary-font-color text-xl mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          cupiditate eum assumenda, illum veritatis dolore, alias nobis harum
          animi.
        </p>
        <div className="bg-secondary-font-color rounded-(--standard-radius) overflow-hidden h-120">
          <Image
            src={myPicture}
            alt="My Picture"
            className="-my-30 w-full object-cover"
          />
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-col ">
        <div className="w-50 h-50 overflow-hidden rounded-(--standard-radius) mx-auto">
          <Image
            src={myPicture2}
            alt="My Picture"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Experiences */}
        <div className="mt-auto">
          <ul className="">
            <li className="flex items-start gap-3 mb-10">
              <div className="">
                <ChevronsRight size={30} />
              </div>
              <span className="text-xl text-secondary-font-color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                tenetur quis sequi debitis labore ea error nostrum ducimus
                accusantium modi, maiores maxime et impedit consectetur aliquam?
                Aspernatur illum id ipsum!
              </span>
            </li>
            <li className="flex items-start gap-3 mb-10">
              <div className="">
                <ChevronsRight size={30} />
              </div>
              <span className="text-xl text-secondary-font-color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                tenetur quis sequi debitis labore ea error nostrum ducimus
                accusantium modi, maiores maxime et impedit consectetur aliquam?
                Aspernatur illum id ipsum!
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div>
                <ChevronsRight size={30} />
              </div>
              <span className="text-xl text-secondary-font-color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                tenetur quis sequi debitis labore ea error nostrum ducimus
                accusantium modi, maiores maxime et impedit consectetur aliquam?
                Aspernatur illum id ipsum!
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
