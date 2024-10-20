import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, siteURL, twitterHandle, imagePreview }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Open Graph */}
      <meta property="og:url" content={siteURL} />
      <meta property="og:image" content={imagePreview} />
      <meta property="og:site_name" content={siteURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <title>{title}</title>

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/icons/icon-16x16.png" type="image/png" sizes="16x16" />
      <link rel="icon" href="/icons/icon-32x32.png" type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <meta name="theme-color" content="#EF4444" />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "Bienvenue chez EcoShop",
  description: "Votre destination pour un mode de vie durable",
  keywords: "écologie, produits éco-responsables, commerce équitable, mode de vie durable",
  siteURL: "https://www.ecoshop.com",
  twitterHandle: "@EcoShop",
  imagePreview: "https://www.ecoshop.com/default-preview-image.png",
};

export default SEO;
