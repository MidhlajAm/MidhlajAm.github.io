import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { site } from '../../data/site';

const absoluteUrl = (path = '/') => {
  const url = path.startsWith('http') ? path : `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
  return encodeURI(url);
};

const SEO = ({
  title = site.defaultTitle,
  description = site.defaultDescription,
  image = site.defaultImage,
  path = '/',
  type = 'website',
}) => {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  useEffect(() => {
    document
      .querySelectorAll('head > title[data-rh="true"], head > meta[data-rh="true"], head > link[data-rh="true"][rel="canonical"]')
      .forEach((element) => element.remove());
  }, [title, description, image, path, type]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.websiteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
