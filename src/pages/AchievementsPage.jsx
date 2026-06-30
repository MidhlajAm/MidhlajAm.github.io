import React from 'react';
import PageNav from '../components/layout/PageNav';
import SEO from '../components/seo/SEO';
import PixelCard from '../components/ui/PixelCard';
import achievements from '../data/achievements.json';

const AchievementsPage = () => (
  <>
    <SEO
      title="Achievements | Midhlaj AM"
      description="Certificates, workshops, volunteering, technical events, and leadership activities from Midhlaj AM."
      path="/achievements"
    />
    <PageNav />
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div className="mb-12 text-center">
        <p className="font-vt323 text-2xl text-gray-400 mb-3">UNLOCKED</p>
        <h1 className="font-press-start text-3xl sm:text-4xl leading-relaxed">ACHIEVEMENTS</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {achievements.map((achievement) => (
          <PixelCard key={`${achievement.category}-${achievement.title}`} className="h-full w-full max-w-[360px]">
            <p className="font-vt323 text-xl text-gray-400 mb-3">{achievement.category}</p>
            <h2 className="font-press-start text-lg leading-relaxed mb-5">{achievement.title}</h2>
            <p className="font-courier text-gray-300 leading-7">{achievement.description}</p>
          </PixelCard>
        ))}
      </div>
    </section>
  </>
);

export default AchievementsPage;

