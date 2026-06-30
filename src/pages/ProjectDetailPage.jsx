import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageNav from '../components/layout/PageNav';
import SEO from '../components/seo/SEO';
import PixelCard from '../components/ui/PixelCard';
import RetroButton from '../components/ui/RetroButton';
import ImageModal from '../components/ui/ImageModal';
import projects from '../data/projects.json';

const DetailList = ({ title, items }) => (
  <PixelCard>
    <h2 className="font-press-start text-lg mb-5">{title}</h2>
    <ul className="space-y-3 font-vt323 text-xl text-gray-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="w-2 h-2 bg-white mt-3 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </PixelCard>
);

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <PageNav />
        <section className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="font-press-start text-2xl mb-6">PROJECT NOT FOUND</h1>
          <Link to="/projects" className="font-vt323 text-2xl underline">Back to projects</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} | Flutter Project`}
        description={project.description}
        image={project.image}
        path={`/projects/${project.slug}`}
      />
      <PageNav />
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center mb-12">
          <div className="text-center lg:text-left">
            <p className="font-vt323 text-2xl text-gray-400 mb-3">PROJECT FILE</p>
            <h1 className="font-press-start text-3xl sm:text-4xl leading-relaxed mb-5">{project.title}</h1>
            <p className="font-vt323 text-2xl text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><RetroButton>GITHUB</RetroButton></a>}
              {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><RetroButton>DEMO</RetroButton></a>}
            </div>
          </div>
          <img src={project.image} alt={project.title} className="w-full" />
        </div>

        <PixelCard className="mb-8">
          <h2 className="font-press-start text-lg mb-5">OVERVIEW</h2>
          <p className="font-vt323 text-2xl text-gray-300 leading-relaxed">{project.overview}</p>
        </PixelCard>

        <h2 className="font-press-start text-lg mb-5 text-center">SCREENSHOTS</h2>
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center snap-x snap-mandatory gap-5 mb-8 items-center pb-4 scroll-smooth">
          {project.screenshots.map((screenshot, index) => (
            <img 
              key={`${screenshot}-${index}`} 
              src={screenshot} 
              alt={`${project.title} screenshot ${index + 1}`} 
              loading="lazy" 
              className="shrink-0 w-[85%] sm:w-full max-w-[340px] snap-center object-contain cursor-zoom-in hover:opacity-80 transition-opacity max-h-[500px]" 
              onClick={() => setSelectedImage(screenshot)}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <DetailList title="FEATURES" items={project.features} />
          <DetailList title="CHALLENGES" items={project.challenges} />
          <DetailList title="LEARNINGS" items={project.learnings} />
          <DetailList title="TECH STACK" items={project.techStack} />
        </div>
      </section>

      {selectedImage && (
        <ImageModal 
          src={selectedImage} 
          alt="Preview" 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </>
  );
};

export default ProjectDetailPage;



