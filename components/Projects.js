// "use client"
// import React, { useState } from "react";
// import ProjectData from "@constants/projects";
// import { ProjectCard } from "./ProjectCard";

// export default function Projects() {

//   const [activeFilter, setActiveFilter] = useState("All");

//   const filters = ["All", "Blockchain", "Frontend", "A.I"];
//   const filteredProjects = activeFilter === "All"
//     ? ProjectData
//     : ProjectData.filter(proj => proj.labels.includes(activeFilter));

//   return (
//     <section className="bg-white dark:bg-gray-800">
//       <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
//         <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
//           Projects
//         </h1>
//       </div>

//       {/* Filter buttons */}
//       <div className="w-[400px] mx-auto mt-10 flex flex-wrap justify-center gap-2 mb-8 border-4 rounded-3xl py-2">
//         {filters.map((filter) => (
//           <button
//             key={filter}
//             onClick={() => setActiveFilter(filter)}
//             className={`px-4 text-lg py-2 rounded-xl transition-colors ${activeFilter === filter
//               ? "bg-gray-700 dark:bg-gray-200 dark:text-gray-700 text-white"
//               : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
//               }`}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>

//       {/* Grid starts here */}
//       <div className="bg-[#F1F1F1] dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 space-y-10 py-20 pb-40">
//           {filteredProjects.map((proj, idx) => (
//             <ProjectCard
//               key={idx}
//               title={proj.name}
//               link={`/projects/${proj.id}`}
//               imgUrl={proj.mainImage}
//               number={`${idx + 1}`}
//               projectId={proj.id}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client"
import React, { useState, useEffect } from "react";
import ProjectData from "@constants/projects";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {

  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(ProjectData);

  const filters = ["All", "Blockchain", "Frontend", "A.I"];

  // Handle filter change with loading animation
  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;

    setIsLoading(true);
    setActiveFilter(filter);

    // Simulate loading delay for smooth animation
    setTimeout(() => {
      const newFilteredProjects = filter === "All"
        ? ProjectData
        : ProjectData.filter(proj => proj.labels.includes(filter));

      setFilteredProjects(newFilteredProjects);
      setIsLoading(false);
    }, 300);
  };

  // Initial load animation
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setFilteredProjects(ProjectData);
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>

      {/* Filter buttons */}
      <div className="w-[400px] mx-auto mt-10 flex flex-wrap justify-center gap-2 mb-8 border-4 rounded-3xl py-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            disabled={isLoading}
            className={`px-4 text-lg py-2 rounded-xl transition-all duration-300 ${activeFilter === filter
              ? "bg-gray-700 dark:bg-gray-200 dark:text-gray-700 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto py-20 pb-40">
          {/* Loading Animation */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Skeleton loading cards */}
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="animate-pulse bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="h-64 bg-gray-300 dark:bg-gray-700"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-full"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="animate-fadeIn"
                >
                  <ProjectCard
                    title={proj.name}
                    link={`/projects/${proj.id}`}
                    imgUrl={proj.mainImage}
                    number={`${idx + 1}`}
                    projectId={proj.id}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add this CSS to your global styles or component */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}