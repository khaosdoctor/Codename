function init (parser = null) {
  return new (require('./src/codename'))(parser)
}

module.exports = init
