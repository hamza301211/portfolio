/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://hamzanadeem.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://hamzanadeem.vercel.app/sitemap.xml',
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customPriorities = {
      '/': { priority: 1.0, changefreq: 'weekly' },
      '/projects': { priority: 0.9, changefreq: 'weekly' },
      '/skills': { priority: 0.8, changefreq: 'monthly' },
      '/experience': { priority: 0.8, changefreq: 'monthly' },
      '/contact': { priority: 0.7, changefreq: 'monthly' },
    };

    const customConfig = customPriorities[path] || {
      priority: config.priority,
      changefreq: config.changefreq,
    };

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: customConfig.changefreq,
      priority: customConfig.priority,
    };
  },
};
