import React from "react";
import Link from "next/link";

export default function Skills() {
    return (
        <div className="bg-white p-5 bg-white dark:bg-gray-800 box-content">
            <div className="md:text-left sm:text-center text-6xl sm:pt-5 font-bold text-gray-700 dark:text-gray-200 md:text-9xl shadow-lg">
                My Expertise
            </div>

            <div className="w-full flex flex-col md:flex-row lg:flex-row text-[14px] text-gray-600 dark:text-gray-100 py-10 gap-5 justify-between px-5">

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-1/3 shadow-xl w-full sm:pb-5 h-[450px]">
                    <p> An experienced Fullstack <span className="font-bold text-sm">Blockchain Developer</span> with expertise in designing, deploying, and optimizing
                        smart contracts and decentralized applications across leading blockchain ecosystems. Over the years,
                        I’ve contributed to projects ranging from NFT marketplaces and staking platforms to cross-chain bridges
                        and on-chain token purchase systems. My work spans Ethereum, Solana, BNB Smart Chain, Polygon, NEAR, Cosmos,
                        Optimism and Arbitrum with a strong focus on security, scalability, and user engagement.
                    </p>
                    <h2 className="font-bold text-sm">Tools</h2>
                    <p><span className="font-semibold">Smart Contract Development</span>: Hardhat, Anchor, Remix IDE, ThirdWeb</p>
                    <p><span className="font-semibold">Blockchain Interactions</span>: Ethers.js, web3.js, Wagmi hooks, RainbowKit</p>
                    <p><span className="font-semibold">Cross-Chain & Oracles</span>: Chainlink CCIP, Chainlink Oracles (Price Feeds), Off-chain Relayers, Lock-Release Token Pools</p>
                    <h2 className="font-bold text-sm">Programming Languages:</h2>
                    <p className="font-semibold">Solidity, Rust</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-1/3 shadow-xl w-full sm:pb-5 [450px]">
                    <p>A <span className="font-bold text-sm">Frontend Developer</span> with over four years of experience building responsive,
                        user-focused web applications and decentralized apps. My work emphasizes creating performant,
                        scalable, and intuitive user interfaces that improve engagement while ensuring seamless integration
                        with blockchain backends. I have built dashboards, responsive layouts, and reusable components for NFT marketplaces,
                        DeFi platforms, and Web3-enabled e-commerce systems.
                    </p>
                    <h2 className="text-sm font-bold">Tools</h2>
                    <p><span className="font-semibold">Frontend & UI Development</span>: React, Next.js, Material UI, Tailwind CSS</p>
                    <p><span className="font-semibold">Design & Prototyping</span>: Figma, Adobe Creative Cloud (Photoshop, Illustrator), Canva</p>
                    <p><span className="font-semibold">Node.js</span></p>
                    <p><span className="font-semibold">Version Control & Collaboration</span>: Git, GitHub, GitBucket</p>
                    <h2 className="text-sm font-bold">Programming Languages:</h2>
                    <p className="font-semibold">JavaScript (ES6+), TypeScript, HTML & CSS</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-1/3 shadow-xl w-full sm:pb-5 [450px]">
                    An <span className="font-bold text-sm">Agentic AI Engineer</span> with experience designing and integrating intelligent AI-driven systems
                    into real-world applications, particularly within Web3 and decentralized platforms. My focus is on building
                    AI agents that can autonomously interact with APIs, blockchain protocols, and frontend interfaces to deliver
                    automation, insights, and decision-making capabilities.
                    <h2 className="text-sm font-bold">Tools</h2>
                    <p><span className="font-semibold">Agentic AI Tools & Libraries</span>: LangChain, LlamaIndex, AutoGPT-style frameworks, MCP (Model Context Protocol)</p>
                    <p><span className="font-semibold">LLM Frameworks & Platforms</span>: OpenAI API (GPT-5, GPT-4, o1, o2, o3, o4), Anthropic Claude, Google Gemini, DeepSeek, Phind AI</p>
                    <h2 className="text-sm font-bold">Programming Languages:</h2>
                    <p className="font-semibold">Python</p>
                </div>


                {/* <div className="lg:w-1/3 md:w-1/3 sm:w-full p-5 rounded-2xl shadow-2xl">
        <p>A <span className="font-bold text-sm">Frontend Developer</span> with over four years of experience building responsive, 
            user-focused web applications and decentralized apps. My work emphasizes creating performant, 
            scalable, and intuitive user interfaces that improve engagement while ensuring seamless integration 
            with blockchain backends. I have built dashboards, responsive layouts, and reusable components for NFT marketplaces, 
            DeFi platforms, and Web3-enabled e-commerce systems.
        </p>
        <h2 className="text-sm font-bold">Tools</h2>
        <p><span className="font-semibold">Frontend & UI Development</span>: React, Next.js, Material UI, Tailwind CSS</p>
        <p><span className="font-semibold">Design & Prototyping</span>: Figma, Adobe Creative Cloud (Photoshop, Illustrator), Canva</p>
        <p><span className="font-semibold">Node.js</span></p>
        <p><span className="font-semibold">Version Control & Collaboration</span>: Git, GitHub, GitBucket</p>
        <h2 className="text-sm font-bold">Programming Languages:</h2>
        <p className="font-semibold">JavaScript (ES6+), TypeScript, HTML & CSS</p>
        </div> */}
            </div>
        </div>
    )
}