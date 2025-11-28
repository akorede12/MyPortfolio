"use client"
import React, { useState } from "react";
import ProjectData from "@constants/projects";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Blockchain", "Frontend", "AI"];

  const filteredProjects = activeFilter === "All"
    ? ProjectData
    : ProjectData.filter(proj => proj.labels.includes(activeFilter));

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>

      {/* Filter buttons */}
      <div className="max-w-6xl mx-auto pt-10 flex flex-wrap justify-center gap-4 pb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg transition-colors ${activeFilter === filter
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {filteredProjects.map((proj, idx) => (
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