import React from 'react';
import PixelCard from '../ui/PixelCard';
import RetroButton from '../ui/RetroButton';

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: 'PROJECT_ALPHA',
            desc: 'A full-stack e-commerce platform built with Next.js.',
            tech: ['React', 'Node', 'SQL'],
        },
        {
            id: 2,
            title: 'NEON_DASH',
            desc: 'Real-time dashboard for monitoring server metrics.',
            tech: ['Vue', 'Firebase', 'D3'],
        },
        {
            id: 3,
            title: 'RETRO_CHAT',
            desc: 'WebSocket-based chat application with retro theme.',
            tech: ['Socket.io', 'Express', 'Redis'],
        },
    ];

    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center p-8">
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl font-press-start mb-12 text-center text-shadow-retro">PROJECTS</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <PixelCard key={project.id} className="flex flex-col h-full hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
                            <div className="h-40 bg-gray-900 border-b-4 border-white mb-4 flex items-center justify-center">
                                <span className="font-press-start text-xs text-gray-500">NO_IMAGE</span>
                            </div>
                            <h3 className="font-press-start text-lg mb-4 truncate">{project.title}</h3>
                            <p className="font-vt323 text-lg text-gray-300 mb-6 flex-grow">
                                {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs border border-white px-2 py-1 font-vt323">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <RetroButton className="w-full text-center">
                                VIEW CODE
                            </RetroButton>
                        </PixelCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
