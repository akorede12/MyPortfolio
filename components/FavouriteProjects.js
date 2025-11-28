import React from "react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-10 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
            Favourite Projects
          </h1>
          <Link href="/projects" className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square text-gray-700"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p className="text-gray-700">View all</p>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:-mt-8 pb-40 px-4 md:px-0">
          {/* Single card */}
          <ProjectCard
            title="The Open Protocol"
            projectId="1"
            imgUrl="/topx.png"
            number="1"
          />
          <ProjectCard
            title="APPWARE"
            projectId="3"
            imgUrl="/AppwareHero.png"
            number="2"
          />
          <ProjectCard
            title="SMART INVEST"
            projectId="2"
            imgUrl="/SmartInvestHero.png"
            number="3"
          />
          <ProjectCard
            title="BoundlessPay - Staking & Bridging Platform"
            projectId="5"
            imgUrl="/bpayHero.png"
            number="4"
          />
          <ProjectCard
            title="OnChain Votes"
            projectId="11"
            imgUrl="/OnChainVotes.png"
            number="5"
          />
        </div>
      </div>
    </div>
  );
}
