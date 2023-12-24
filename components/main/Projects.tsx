import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="FindNest"
          description="This is a Hotel, Apartment and PG booking web app that I plan on making."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="HTML , CSS , JS powering website card."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Arthur's Crib"
          description="My space-themed portfolio, powered by Next.js and Tailwind CSS showcasing my skills ."
        />
      </div>
    </div>
  );
};

export default Projects;
