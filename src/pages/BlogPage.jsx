import React, { useMemo, useState } from 'react';
import BlogCard from '../components/cards/BlogCard';
import PageNav from '../components/layout/PageNav';
import SEO from '../components/seo/SEO';
import { blogPosts } from '../utils/blog';

const BlogPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('ALL');

  const categories = useMemo(() => ['ALL', ...new Set(blogPosts.flatMap((post) => post.categories))], []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = `${post.title} ${post.description} ${post.content}`.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'ALL' || post.categories.includes(category);
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Blog | Midhlaj AM"
        description="Technical articles from Midhlaj AM about Flutter, mobile app development, Firebase, and developer workflows."
        path="/blog"
      />
      <PageNav />
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
        <div className="mb-10">
          <p className="font-vt323 text-2xl text-gray-400 mb-3">FIELD NOTES</p>
          <h1 className="font-press-start text-3xl sm:text-4xl leading-relaxed">BLOG</h1>
        </div>

        <div className="border-4 border-white p-4 max-w-4xl mx-auto mb-10 text-left">
          <label className="font-press-start text-xs block mb-3 text-center" htmlFor="blog-search">SEARCH</label>
          <input
            id="blog-search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="POST OR TOPIC"
            className="w-full bg-black border-2 border-white p-2 text-white font-vt323 text-xl mb-5 text-center focus:outline-none focus:bg-gray-900"
          />
          <p className="font-press-start text-xs mb-3 text-center">CATEGORY</p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`border-2 px-3 py-1 font-vt323 text-lg ${category === item ? 'bg-white text-black border-white' : 'border-white text-white hover:bg-white hover:text-black'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <h2 className="font-press-start text-lg mb-5 text-center">ALL POSTS</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
