// next.config.js
module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/public/projects.html': { page: '/projects' },
      '/public/exp.html': { page: '/exp' },
      // Add other static routes here
    };
  },
};
