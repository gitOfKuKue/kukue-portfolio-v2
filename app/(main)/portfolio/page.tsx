"use client";

import Container from "@/src/components/essential-components/Container";
import useRole from "@/src/hook/useRole";
import { Minus, Quote } from "lucide-react";
import { useState } from "react";

import fullStackProjects from "@/src/projects/full-stack.json";
import Image from "next/image";
import LastProject from "./LastProject";
import Projects from "./Projects";
import useMethods from "@/src/hook/useMethods";

const PortfolioPage = () => {
  const { role } = useRole();
  const { countingNumber } = useMethods();
  //   Generating all projects
  const [projects, setProjects] = useState(
    role === "Full Stack Developer" ? fullStackProjects : []
  );

  //   Generating latest project
  const lastProject =
    projects.length > 0
      ? projects.reduce((a, b) => {
          return new Date(a.endDate).getTime() >
            new Date(b.endDate).getTime() && a.endDate !== "Present"
            ? a
            : b;
        })
      : null;

  const workDone = countingNumber(projects.length);

  const skills = Array.from(
    new Set(
      projects.reduce((acc: string[], project) => {
        return [...acc, ...project.technologies];
      }, [])
    )
  );

  return (
    <section className="py-10">
      <Container>
        <div className="flex items-center justify-between mb-32">
          <div className="h-80 flex flex-col justify-between text-background">
            {/* Content */}
            <h1 className="text-8xl font-bold bg-linear-to-b from-foreground to-background bg-clip-text text-transparent">
              <span>Portfolio</span>
            </h1>
            <h2 className="flex items-center gap-2 text-foreground text-2xl">
              <span>{role}</span>
              <Minus size={40} />
            </h2>

            {/* Workdone Counts */}
            <div className="flex items-center gap-5">
              <div className="w-60 bg-foreground p-5 rounded-(--standard-radius)">
                <h2 className="text-xl text-secondary-font-color">Workdone</h2>
                <h2 className="text-6xl font-bold text-background">
                  {workDone < projects.length ? "+" : ""}
                  {workDone}
                </h2>
              </div>

              <div className="w-60 bg-foreground p-5 rounded-(--standard-radius)">
                <h2 className="text-xl text-secondary-font-color">Skills</h2>
                <h2 className="text-6xl font-bold text-background">
                  {skills.length}
                </h2>
              </div>
            </div>
          </div>

          {/* Slogan */}
          <div className="flex flex-col items-end relative">
            <Quote
              className="text-secondary-font-color rotate-180 absolute -top-8 right-full mr-2"
              size={48}
            />
            <h1 className="text-7xl font-bold text-right text-foreground leading-tight">
              Turning Vision <br /> Into Reality
            </h1>
            <Quote
              className="text-secondary-font-color absolute -bottom-8 -right-8"
              size={48}
            />
          </div>
        </div>

        {/* Last Project */}
        <section className="mb-20">
          <LastProject lastProject={lastProject} />
        </section>

        {/* Projects */}
        <section>
          <Projects projects={projects} />
        </section>
      </Container>
    </section>
  );
};

export default PortfolioPage;
