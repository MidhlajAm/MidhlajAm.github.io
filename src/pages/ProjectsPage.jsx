import React, { useMemo, useState } from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import PageNav from '../components/layout/PageNav';
import SEO from '../components/seo/SEO';
import projects from '../data/projects.json';

const ProjectsPage = () => {
  const [search, setSearch] = useState('');
  const [technology, setTechnology] = useState('ALL');

  const technologies = useMemo(() => ['ALL', ...new Set(projects.flatMap((project) => project.technologies))], []);
  const featuredProjects = projects.filter((project) => project.featured);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = `${project.title} ${project.description} ${project.technologies.join(' ')}`.toLowerCase().includes(search.toLowerCase());
    const matchesTechnology = technology === 'ALL' || project.technologies.includes(technology);
    return matchesSearch && matchesTechnology;
  });

  return (
    <>
      <SEO
        title="Projects | Midhlaj AM"
        description="Explore Midhlaj AM's Flutter, Firebase, React, and mobile app development projects."
        path="/projects"
      />
      <PageNav />
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="mb-10">
          <p className="font-vt323 text-2xl text-gray-400 mb-3">BUILD LOG</p>
          <h1 className="font-press-start text-3xl sm:text-4xl leading-relaxed">PROJECTS</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-8 mb-12 items-start">
          <div>
            <h2 className="font-press-start text-lg mb-5">ALL PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </div>
          <aside className="border-4 border-white p-4 sticky top-4">
            <label className="font-press-start text-xs block mb-3" htmlFor="project-search">SEARCH</label>
            <input
              id="project-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="PROJECT OR TECH"
              className="w-full bg-black border-2 border-white p-2 text-white font-vt323 text-xl mb-5 focus:outline-none focus:bg-gray-900"
            />
            <p className="font-press-start text-xs mb-3">TECH</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((item) => (
                <button
                  key={item}
                  onClick={() => setTechnology(item)}
                  className={`border-2 px-3 py-1 font-vt323 text-lg ${technology === item ? 'bg-white text-black border-white' : 'border-white text-white hover:bg-white hover:text-black'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </aside>
        </div>


      </section>
    </>
  );
};

export default ProjectsPage;
