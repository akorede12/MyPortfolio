import React from "react";
import ProjectData from "@constants/projects";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {ProjectData.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.name}
              link={`/projects/${proj.id}`}
              imgUrl={proj.mainImage}
              number={`${idx + 1}`}
              projectId={proj.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}