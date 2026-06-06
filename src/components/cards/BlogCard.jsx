import React from 'react';
import { Link } from 'react-router-dom';
import PixelCard from '../ui/PixelCard';

const BlogCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`} className="block h-full">
    <PixelCard className="h-full flex flex-col hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
      <div className="h-44 bg-gray-900 mb-4 overflow-hidden">
        <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {post.featured && <span className="font-vt323 text-sm border border-white bg-white text-black px-2">⭐ FEATURED</span>}
        {post.categories.map((category) => (
          <span key={category} className="font-vt323 text-sm border border-white px-2">{category}</span>
        ))}
      </div>
      <h3 className="font-press-start text-base leading-relaxed mb-4">{post.title}</h3>
      <p className="font-vt323 text-xl text-gray-300 flex-grow mb-4">{post.description}</p>
      <span className="font-vt323 text-gray-400">{post.readingTime} MIN READ</span>
    </PixelCard>
  </Link>
);

export default BlogCard;
