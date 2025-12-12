import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitBranch,
  Github,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LastProject = ({ lastProject }: { lastProject: any }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === lastProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? lastProject.images.length - 1 : prev - 1
    );
  };

  const hasMultipleImages = lastProject?.images?.length > 1;

  return (
    <div>
      <div>
        <div className="border border-t-0 h-2"></div>
        <h1 className="text-6xl font-bold my-10 text-center">Last Project</h1>
        <div className="border border-b-0 h-2"></div>
      </div>

      {lastProject && (
        <section>
          <div className="flex items-center gap-10">
            <div className="my-10">
              <div className="flex justify-between text-center">
                {/* Heading */}
                <div className="mb-5">
                  <div className="mb-4 flex items-end gap-2">
                    <div className="flex gap-2">
                      <Quote size={20} className="rotate-180" />
                      <h2 className="text-4xl font-bold">
                        {lastProject.title}
                      </h2>
                      <Quote size={20} />
                    </div>
                    <span className="text-secondary-font-color capitalize">
                      ({lastProject.type})
                    </span>
                  </div>
                  <p className="text-xl mb-4 text-secondary-font-color">
                    {lastProject.description}
                  </p>
                  <div className="flex gap-2">
                    {lastProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="bg-foreground text-background px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* GitHub Link */}
                <Link
                  href={lastProject.github}
                  className="relative group border w-30 h-30 overflow-hidden rounded-(--standard-radius)"
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center group-hover:blur-2xl transition-all duration-300">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-5xl mb-2"
                    />
                    <h1 className="text-center text-xs">To GitHub Repo</h1>
                  </div>
                  <ExternalLink
                    size={30}
                    className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                  />
                </Link>
              </div>
              {/* Detail  */}
              <div className="flex items-center gap-10">
                <p className="text-justify text-2xl leading-10">
                  {lastProject.details}
                </p>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative w-280 h-150 rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 group mx-auto">
            <Image
              src={lastProject.images[currentImageIndex]}
              alt={`${lastProject.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            {hasMultipleImages && (
              <>
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} className="text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} className="text-foreground" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {lastProject.images.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-foreground w-4"
                          : "bg-foreground/50 hover:bg-foreground/80"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default LastProject;
