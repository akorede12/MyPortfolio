"use client"
import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });
        if (domRef.current) {
            observer.observe(domRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-white p-5 bg-white dark:bg-gray-800 box-content">
            <div className="md:text-left sm:text-center text-6xl sm:pt-5 font-bold text-gray-700 dark:text-gray-200 md:text-9xl shadow-lg">
                My Expertise
            </div>

            <div id="cards" ref={domRef} className="w-full flex flex-col md:flex-row lg:flex-row text-[14px] text-gray-600 dark:text-gray-100 py-10 gap-5 justify-between px-5">

                <div
                    id="Blockchain"
                    className={`relative bg-white/10 backdrop-blur-md border shadow-2xl border-white/20 rounded-2xl p-5 w-full sm:pb-5 h-[450px] overflow-hidden text-[16px] font-bold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    onMouseEnter={() => setHoveredSkill("Blockchain")}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    {/* Main Content */}
                    <div className={`transition-all duration-350 ease-in-out ${hoveredSkill === "Blockchain" ? '-translate-y-full opacity-0' : 'opacity-100 translate-y-0 '}`}>
                        <p>
                            <span className="font-extrabold text-[22px] px-2 text-gray-700 dark:text-gray-400">
                                Experienced Fullstack Blockchain Developer</span> with expertise in designing, deploying, and optimizing
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">smart contracts</span>
                            and <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">decentralized applications</span> across leading blockchain ecosystems. Over the years,
                            I've contributed to projects ranging from
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">NFT marketplaces</span> and
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">staking platforms</span>
                            to
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">cross-chain bridges</span>
                            and
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">on-chain token purchase systems</span>
                            . My work spans Ethereum, Base, Solana, BNB Smart Chain, Polygon, NEAR, Cosmos,
                            Optimism and Arbitrum with a strong focus on security, scalability, and user engagement.
                        </p>
                    </div>

                    {/* Tools Section - Hidden by default, slides up on hover */}
                    <div
                        className={`absolute inset-0 bg-white dark:bg-white/5 backdrop-blur-md p-5 transition-transform duration-350 ease-in-out rounded-2xl text-[20px]
          ${hoveredSkill === "Blockchain" ? 'translate-y-0' : 'translate-y-full'}`}
                    >
                        <h2 className="font-bold text-sm my-1">Programming Languages:</h2>
                        <p className="font-semibold">Solidity, Rust</p>
                        <h2 className="font-bold text-sm my-1">Smart Contract Development:</h2>
                        <p>Hardhat, Anchor, Remix IDE, ThirdWeb</p>
                        <h2 className="font-bold text-sm my-1">Blockchain Interactions:</h2>
                        <p> Ethers.js, web3.js, Wagmi hooks, RainbowKit</p>
                        <h2 className="font-bold text-sm my-1">Cross-Chain & Oracles:</h2>
                        <p> Chainlink CCIP, Chainlink Oracles (Price Feeds), Off-chain Relayers, Lock-Release Token Pools</p>
                        <h1 className="text-[70px] font-bold text-right">Web3.</h1>
                    </div>
                </div>

                <div
                    id="Frontend"
                    className={`relative bg-white/10 backdrop-blur-md border shadow-2xl border-white/20 rounded-2xl p-5 w-full sm:pb-5 h-[450px] overflow-hidden text-[16px] font-bold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: '300ms' }}
                    onMouseEnter={() => setHoveredSkill("Frontend")}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    {/* Main Content */}
                    <div className={`transition-all duration-350 ease-in-out ${hoveredSkill === "Frontend" ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                        <p>
                            <span className="font-extrabold text-[22px] px-2 text-gray-700 dark:text-gray-400">
                                Frontend Developer</span> with over four years of experience building
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">responsive</span>
                            user-focused web applications and decentralized apps. My work emphasizes creating
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">performant</span>
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">scalable</span>
                            , and
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">intuitive</span> user interfaces that improve engagement while ensuring seamless integration
                            with blockchain backends.
                            I have built dashboards, responsive layouts, and
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">reusable components</span>  for NFT marketplaces,
                            DeFi platforms, and
                            <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">e-commerce systems</span>
                            .
                        </p>
                    </div>

                    {/* Tools Section - Hidden by default, slides up on hover */}
                    <div
                        className={`absolute inset-0 bg-white dark:bg-white/5 backdrop-blur-md p-5 transition-transform duration-350 ease-in-out rounded-2xl text-[20px]
          ${hoveredSkill === "Frontend" ? 'translate-y-0' : 'translate-y-full'}`}
                    >
                        <h2 className="font-bold text-sm my-1">Programming Languages:</h2>
                        <p className="font-semibold">JavaScript (ES6+), TypeScript, HTML & CSS</p>
                        <h2 className="font-bold text-sm my-1">Frontend & UI Development:</h2>
                        <p>React, Next.js, Material UI, Tailwind CSS</p>
                        <h2 className="font-bold text-sm my-1">Design & Prototyping:</h2>
                        <p> Figma, Adobe Creative Cloud (Photoshop, Illustrator), Canva</p>
                        <h2 className="font-bold  my-2">Node.js</h2>
                        <h2 className="font-bold text-sm my-1">Version Control & Collaboration:</h2>
                        <p> Git, GitHub, GitBucket, GitLab</p>
                        <h1 className="text-[70px] font-bold text-right">Web.</h1>
                    </div>
                </div>

                <div id="AI"
                    className={`relative bg-white/10 backdrop-blur-md border shadow-2xl border-white/20 rounded-2xl p-5 w-full sm:pb-5 h-[450px] overflow-hidden text-[16px] font-bold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: '600ms' }}
                    onMouseEnter={() => setHoveredSkill("AI")}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    {/* Main Content */}
                    <div className={`transition-all duration-350 ease-in-out ${hoveredSkill === "AI" ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                        <span className="font-extrabold text-[22px] px-2 text-gray-700 dark:text-gray-400">AI Engineer</span> specializing in the architecture and implementation of  <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">autonomous AI agents.</span>
                        My core competency lies in developing agents that leverage tool-use,
                        API integration,
                        and <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">RAG</span>to interact with complex environments, including blockchain protocols and Web3 applications. I have extensive experience
                        fine-tuning LLMs for specific agentic tasks, optimizing for
                        <span className="font-extrabold text-[22px] px-1 text-gray-700 dark:text-gray-400">reasoning,</span>
                        tool selection,
                        and
                        structured output to drive automation and enhance user-facing products.
                    </div>

                    {/* Tools Section - Hidden by default, slides up on hover */}
                    <div
                        className={` block absolute inset-0 bg-white dark:bg-white/5 backdrop-blur-md p-5 transition-transform duration-350 ease-in-out rounded-2xl text-[20px]
          ${hoveredSkill === "AI" ? 'translate-y-0' : 'translate-y-full'}`}
                    >
                        <h2 className="font-bold text-sm my-1">Programming Languages:</h2>
                        <p className="font-semibold"> Python</p>
                        <h2 className="font-bold text-sm my-1">Agentic AI Tools & Libraries:</h2>
                        <p>LangChain, LlamaIndex, AutoGPT-style frameworks, MCP (Model Context Protocol)</p>
                        <h2 className="font-bold text-sm my-1">LLM Frameworks & Platforms:</h2>
                        <p>OpenAI API (GPT-5, GPT-4, o1, o2, o3, o4), Anthropic Claude, Google Gemini, DeepSeek, Phind AI </p>
                        <h1 className="text-[80px] font-bold text-right">AI.</h1>
                    </div>
                </div>

            </div>
        </div >
    )
}