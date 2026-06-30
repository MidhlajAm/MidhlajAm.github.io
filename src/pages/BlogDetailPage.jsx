import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogCard from '../components/cards/BlogCard';
import PageNav from '../components/layout/PageNav';
import MarkdownContent from '../components/markdown/MarkdownContent';
import SEO from '../components/seo/SEO';
import { getBlogPost, getRelatedPosts } from '../utils/blog';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  const relatedPosts = getRelatedPosts(post);

  if (!post) {
    return (
      <>
        <PageNav />
        <section className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="font-press-start text-2xl mb-6">POST NOT FOUND</h1>
          <Link to="/blog" className="font-vt323 text-2xl underline">Back to blog</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        image={post.image}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <PageNav />
      <section className="max-w-4xl mx-auto px-4 py-10 md:py-16">
        <div className="mb-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {post.categories.map((category) => <span key={category} className="font-vt323 text-lg border border-white px-2">{category}</span>)}
          </div>
          <h1 className="font-press-start text-2xl sm:text-4xl leading-relaxed mb-5">{post.title}</h1>
          <p className="font-vt323 text-2xl text-gray-300 mb-4">{post.description}</p>
          <p className="font-vt323 text-xl text-gray-400">{post.date} / {post.readingTime} MIN READ</p>
        </div>
        <img src={post.image} alt={post.title} className="w-full border-4 border-white mb-10" />
        <MarkdownContent content={post.content} />

        {relatedPosts.length > 0 && (
          <div className="mt-14">
            <h2 className="font-press-start text-lg mb-5">RELATED POSTS</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {relatedPosts.map((relatedPost) => <BlogCard key={relatedPost.slug} post={relatedPost} />)}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default BlogDetailPage;

