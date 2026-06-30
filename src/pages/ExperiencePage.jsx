import React from 'react';
import PageNav from '../components/layout/PageNav';
import SEO from '../components/seo/SEO';
import experience from '../data/experience.json';

const ExperiencePage = () => (
  <>
    <SEO
      title="Experience | Midhlaj AM"
      description="Education, internship, open source, workshops, events, and FOSS Club experience from Midhlaj AM."
      path="/experience"
    />
    <PageNav />
    <section className="max-w-5xl mx-auto px-4 py-10 md:py-16">
      <div className="mb-12 text-center">
        <p className="font-vt323 text-2xl text-gray-400 mb-3">TIMELINE</p>
        <h1 className="font-press-start text-3xl sm:text-4xl leading-relaxed">EXPERIENCE</h1>
      </div>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white" />
        <div className="space-y-8">
          {experience.map((item, index) => (
            <article key={`${item.title}-${item.organization}`} className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:ml-auto md:pl-10'} pl-12 md:pl-0`}>
              <span className={`absolute top-3 left-2 md:left-auto w-5 h-5 bg-white border-4 border-black ${index % 2 === 0 ? 'md:-right-3' : 'md:-left-3'}`} />
              <div className="border-4 border-white bg-black p-5">
                <p className="font-vt323 text-xl text-gray-400">{item.type} / {item.period}</p>
                <h2 className="font-press-start text-lg leading-relaxed my-3">{item.title}</h2>
                <p className="font-vt323 text-2xl mb-3">{item.organization}</p>
                <p className="font-courier text-gray-300 leading-7">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ExperiencePage;

