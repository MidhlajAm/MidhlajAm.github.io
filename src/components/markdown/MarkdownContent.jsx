import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownContent = ({ content }) => (
  <article className="font-courier text-base sm:text-lg leading-8 text-gray-200">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="font-press-start text-2xl sm:text-3xl text-white mt-10 mb-6 leading-relaxed">{children}</h1>,
        h2: ({ children }) => <h2 className="font-press-start text-xl sm:text-2xl text-white mt-10 mb-5 leading-relaxed">{children}</h2>,
        h3: ({ children }) => <h3 className="font-press-start text-base sm:text-lg text-white mt-8 mb-4 leading-relaxed">{children}</h3>,
        p: ({ children }) => <p className="mb-5">{children}</p>,
        a: ({ href, children }) => <a className="underline decoration-2 underline-offset-4 hover:bg-white hover:text-black" href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{children}</a>,
        ul: ({ children }) => <ul className="mb-6 space-y-2 pl-5 list-square">{children}</ul>,
        ol: ({ children }) => <ol className="mb-6 space-y-2 pl-6 list-decimal">{children}</ol>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-white pl-4 my-6 text-gray-300 font-vt323 text-2xl">{children}</blockquote>,
        code: ({ inline, children }) => inline ? (
          <code className="bg-white text-black px-1">{children}</code>
        ) : (
          <code className="block bg-gray-950 border-2 border-white p-4 my-6 overflow-x-auto text-sm leading-6">{children}</code>
        ),
        pre: ({ children }) => <pre className="my-6 overflow-x-auto">{children}</pre>,
        table: ({ children }) => <div className="overflow-x-auto my-6 border-2 border-white"><table className="w-full min-w-[560px]">{children}</table></div>,
        th: ({ children }) => <th className="border border-white p-3 text-left font-press-start text-xs">{children}</th>,
        td: ({ children }) => <td className="border border-white p-3">{children}</td>,
        img: ({ src, alt }) => <img src={src} alt={alt || ''} loading="lazy" className="w-full border-4 border-white my-6" />,
      }}
    >
      {content}
    </ReactMarkdown>
  </article>
);

export default MarkdownContent;
