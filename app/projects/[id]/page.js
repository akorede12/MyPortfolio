"use client"

import { useState, useEffect } from 'react';
import ProjectData from "@constants/projects";
import { useParams } from 'next/navigation';

export default function ProjectPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [project, setProject] = useState(null);
    const params = useParams();
    const projectId = params.id;

    useEffect(() => {
        if (projectId) {
            const foundProject = ProjectData.find(proj => proj.id === projectId);
            setProject(foundProject);
        }
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading project...</p>
                </div>
            </div>
        );
    }

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === project.screenshots.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? project.screenshots.length - 1 : prev - 1
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Project Header */}
                <div className="mb-12">
                    <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                        <img
                            src={project.mainImage}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {project.name}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {project.description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Media & Links */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image Slider */}
                        <section className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Screenshots
                            </h2>

                            <div className="relative">
                                <div className="overflow-hidden rounded-lg">
                                    <div
                                        className="flex transition-transform duration-300 ease-in-out"
                                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                    >
                                        {project.screenshots.map((screenshot, index) => (
                                            <div key={index} className="w-full flex-shrink-0">
                                                <img
                                                    src={screenshot}
                                                    alt={`${project.name} screenshot ${index + 1}`}
                                                    className="w-full h-96 object-cover rounded-lg"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {project.screenshots.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevSlide}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg transition-all duration-200"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg transition-all duration-200"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}

                                {/* Slide Indicators */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    {project.screenshots.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Videos Section */}
                        {project.videos.length > 0 && (
                            <section className="bg-white rounded-2xl shadow-sm p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Videos
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.videos.map((video, index) => (
                                        <div key={index} className="relative aspect-video bg-black rounded-lg overflow-hidden">
                                            <video
                                                controls
                                                className="w-full h-full object-cover"
                                                poster={project.screenshots[0]}
                                            >
                                                <source src={video} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Contributors Section */}
                        <section className='flex flex-col gap-4  md:justify-between'>
                            {/* My Contribution */}
                            <section className="bg-white rounded-2xl shadow-sm p-6 md:justify-start lg:justify-start">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    My Contribution
                                </h2>
                                <ul className="space-y-2">
                                    {project.contributions.map((contribution, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600">{contribution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* All Contributors */}
                            <section className="bg-white rounded-2xl shadow-sm p-6 md:justify-end lg:justify-end">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    All Contributors
                                </h2>
                                <div className="space-y-4">
                                    {project.contributors.map((contributor, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <img
                                                src={contributor.avatar}
                                                alt={contributor.name}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="font-medium text-gray-900">
                                                    {contributor.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    {contributor.role}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </section>

                    </div>

                    {/* Right Column - Info Sections */}
                    <div className="space-y-8">
                        {/* About Project & Links */}
                        <section className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                About Project
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {project.about}
                            </p>

                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-900">Project Links</h3>
                                <div className="flex flex-col space-y-2">
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub Repository
                                    </a>
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Video Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Technology Used */}
                        <section className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Technology Used
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}