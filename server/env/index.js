module.exports = (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return require('./modes/production'); // eslint-disable-line
    default:
      return require('./modes/development'); // eslint-disable-line
  }
})();

