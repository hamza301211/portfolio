import Head from 'next/head';

const SEO = ({ 
  title = "Hamza Nadeem Khan | Full Stack Developer & MERN Stack Expert",
  description = "Full Stack Developer specializing in MERN stack, React, Node.js, MongoDB, Express.js, Docker, Kubernetes, and cloud computing. View my portfolio and projects.",
  keywords = "Hamza Nadeem Khan, Full Stack Developer, MERN Stack Developer, React Developer, Node.js Developer, MongoDB, Express.js, Docker, Kubernetes, Cloud Computing, Web Development, JavaScript, Portfolio, Software Engineer",
  canonical = "https://hamzanadeem.vercel.app",
  ogImage = "https://hamzanadeem.vercel.app/images/og-image.jpg",
  ogType = "website",
  structuredData = null
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Hamza Nadeem Khan Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@hamzanadeem" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Hamza Nadeem Khan" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

export default SEO;
