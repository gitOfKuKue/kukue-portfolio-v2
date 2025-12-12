"use client";

import { ArrowUpRight, Dot, ExternalLink, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Projects = ({ projects }: { projects: any }) => {
  const [newProjects, setNewProjects] = useState(() =>
    projects.map((project: any) => ({
      ...project,
      isClicked: false,
    }))
  );

  const handleClick = (id: any) => {
    setNewProjects((prev: any) =>
      prev.map((project: any) =>
        project.id === id
          ? { ...project, isClicked: !project.isClicked }
          : { ...project, isClicked: false }
      )
    );
  };
  return (
    <div>
      {/* Heading */}
      <div>
        <div className="border border-t-0 h-2"></div>
        <div className="my-10 flex items-stretch justify-between">
          {/* Left Side */}
          <div>
            <div className="flex items-center text-font-color">
              <Dot size={50} />
              <span>Experiences</span>
              <Minus className="rotate-90" />
              <h1>({projects.length} Projects)</h1>
            </div>
            <h1 className="text-5xl font-bold">
              Explore My Creative <br /> Journey
            </h1>
          </div>

          {/* Right Side */}
          <div className="w-150 flex flex-col justify-between">
            <p className="text-2xl text-secondary-font-color">
              Explore my creative journey through my projects. From simple
              prototypes to complex applications, I've created a range of
              projects to showcase my skills and knowledge.
            </p>
            {/* Book a call */}
            <Link
              href="tel:+84898247910"
              className="flex gap-2 items-center text-foreground"
            >
              <ExternalLink size={20} />
              Book a call
            </Link>
          </div>
        </div>
        <div className="border border-b-0 h-2"></div>
      </div>

      {/* Projects Container */}
      <div>
        {newProjects.map((project: any) => (
          <ProjectCard
            key={project.title}
            project={project}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  handleClick,
}: {
  project: any;
  handleClick: (id: number) => void;
}) => {
  return (
    <div className={`border-b py-5  ${project.isClicked ? "" : ""}`}>
      <div
        className={`grid grid-cols-4 gap-10 items-center hover:scale-102 transition-all duration-300 group`}
        onClick={() => handleClick(project.id)}
      >
        {/* Title and Time */}
        <div className="col-span-2">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <div
            className={`${
              project.isClicked
                ? "text-foreground"
                : "text-secondary-font-color"
            } flex items-center gap-2`}
          >
            <span>
              {new Date(project.startDate)
                .toLocaleDateString("en-GB")
                .replace(/\//g, "-")}
            </span>
            <Minus size={10} />
            <span>
              {project.endDate === "Present"
                ? "Present"
                : new Date(project.endDate)
                    .toLocaleDateString("en-GB")
                    .replace(/\//g, "-")}
            </span>
          </div>
        </div>

        {/* Type and Tech */}
        <div className={`${project.isClicked ? "hidden" : "block"}`}>
          <p className="capitalize">{project.type}</p>
          <p>{project.technologies.join(", ")}</p>
        </div>

        {/* Status */}
        <div
          className={`${
            project.isClicked ? "col-span-2" : "col-span-1"
          } flex justify-end`}
        >
          <div
            className={`w-fit px-5 py-2 rounded-full border ${
              project.endDate === "Present"
                ? "bg-blue-200 border-blue-500"
                : new Date(project.startDate).getTime() > new Date().getTime()
                ? "bg-yellow-200 border-yellow-500"
                : "bg-green-200 border-green-500"
            }`}
          >
            {project.endDate === "Present"
              ? "On going"
              : new Date(project.startDate).getTime() > new Date().getTime()
              ? "Upcoming"
              : "Completed"}
          </div>
        </div>
      </div>

      {/* Detail Div */}
      <div
        className={`${
          project.isClicked ? "block" : "hidden"
        } mt-10 grid grid-cols-4 gap-10`}
      >
        <div className="flex gap-2 col-span-2">
          {project.images.slice(0, 3).map((image: string, index: number) =>
            image ? (
              <div
                key={index}
                className="h-fit border rounded-md overflow-hidden"
              >
                <Image
                  src={image}
                  alt={project.title}
                  width={200}
                  height={200}
                />
              </div>
            ) : (
              <div key={index}>
                <p className="text-justify text-xl">{project.details}</p>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col">
          <p className="text-xl">{project.description}</p>
          {/* Type and Tech */}
          <div className={`mt-auto`}>
            <p className="capitalize font-bold">
              <Minus />
              {project.type}
            </p>
            <p>{project.technologies.join(", ")}</p>
          </div>
        </div>

        {/* Expand */}
        <div className="relative">
          <div className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 w-15 h-15 bg-foreground rounded-full flex items-center justify-center hover:scale-108 transition-all duration-300">
            <ArrowUpRight size={40} className="text-background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
