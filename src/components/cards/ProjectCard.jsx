import React from 'react';
import { Link } from 'react-router-dom';
import PixelCard from '../ui/PixelCard';

const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.slug}`} className="flex w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] min-w-[280px] max-w-[400px] mx-auto">
    <PixelCard className="w-full flex flex-col hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
      <div className="h-44 bg-gray-900 mb-4 overflow-hidden">
        <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="font-press-start text-base leading-relaxed">{project.title}</h3>
        {project.featured && <span className="font-vt323 text-sm border border-white bg-white text-black px-2">FEATURED</span>}
      </div>
      <p className="font-vt323 text-xl text-gray-300 flex-grow mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="text-xs border border-white px-2 py-1 font-vt323">{technology}</span>
        ))}
      </div>
    </PixelCard>
  </Link>
);

export default ProjectCard;

