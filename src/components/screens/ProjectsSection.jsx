import React from 'react';
import { Link } from 'react-router-dom';
import PixelCard from '../ui/PixelCard';
import RetroButton from '../ui/RetroButton';
import projects from '../../data/projects.json';

const ProjectsSection = () => {
    const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center p-8">
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl font-press-start mb-12 text-center text-shadow-retro">PROJECTS</h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {featuredProjects.map((project) => (
                        <div key={project.slug} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] min-w-[280px] max-w-[400px]">
                            <PixelCard className="flex flex-col h-full hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
                                <div className="h-40 bg-gray-900 mb-4 overflow-hidden">
                                    <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-press-start text-lg mb-4 truncate">{project.title}</h3>
                                <p className="font-vt323 text-lg text-gray-300 mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map(t => (
                                        <span key={t} className="text-xs border border-white px-2 py-1 font-vt323">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <Link to={`/projects/${project.slug}`} className="mt-auto">
                                    <RetroButton className="w-full text-center">VIEW PROJECT</RetroButton>
                                </Link>
                            </PixelCard>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link to="/projects" className="font-press-start text-xs border-2 border-white px-5 py-3 hover:bg-white hover:text-black">
                        ALL PROJECTS
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
