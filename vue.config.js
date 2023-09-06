module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/paintbrushoutdoors/' // note the trailing slash
    : '/',
  }