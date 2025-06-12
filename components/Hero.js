import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-col items-center justify-center mx-auto overflow-hidden">
     {/* Image container */}
     <div className="lg:block relative w-full flex flex-col items-center justify-center mx-auto mt-2">
        <div className="w-full flex flex-col items-center">
          <img src={userData.avatarUrl} height={500} width={500} alt="avatar" className="shadow rounded-xl"/>
          <div className="flex flex-row justify-center mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p>
              <br/>
            </div>
          </div>
        </div>
      </div>
      {/* Text container */}
      <div className="w-full flex flex-row gap-2 items-center justify-center mx-auto text-center lg:p-20">
        <RoughNotationGroup show={true}>
          <div className="flex flex-col items-center">
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Blockchain
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer,
            </h1>
          </RainbowHighlight>
          </div>
          <div className="flex flex-col items-center">
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Frontend
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Engineer,
            </h1>
          </RainbowHighlight>
          </div>
          <div className="flex flex-col items-center">
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              AI(Prompt)
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Engineer.
            </h1>
          </RainbowHighlight>
          </div>
        </RoughNotationGroup>
      </div>
      <h1 className="text-center mt-5 w-1/2 sm:text-base">
        Experienced Fullstack (Web3) Blockchain Developer with over four years of expertise in designing, deploying, and optimizing Ethereum smart contracts,
        Solana smart contracts and decentralized applications. Skilled in Solidity, Rust, JavaScript, and cutting-edge Web3 technologies, with a proven track
        record of building in blockchain ecosystems, enhancing user experience, and ensuring long-term product scalability.
      </h1>
    </div>
  );
}
