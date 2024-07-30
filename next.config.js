module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: '/projects',
        destination: '/projects.html',
      },
      {
        source: '/exp',
        destination: '/exp.html',
      },
      {
      source: '/app',
        destination: '/pages/app.js'
      }
    ];
  },
};