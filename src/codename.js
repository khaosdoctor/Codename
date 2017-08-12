/**
 * Base class of the package
 *
 * @class Codename
 * @public
 */
class Codename {
  /**
   * Creates an instance of Codename.
   * @param {Object} parser An parser object, following the structure of {major: [], minor: [], patch: []} or {major: {key: val}, minor: {key: val}, patch: {key: val}}. If one of the indexes is missing, then the version number will be used
   * @memberof Codename
   * @constructor
   */
  constructor (parser) {
    this._parser = parser
    return this
  }

  /**
   * Parses a version into a codename
   *
   * @param {string} [version='0.0.0'] Version number following Semantic Versioning
   * @returns {Codename} The instance of the class
   * @memberof Codename
   */
  parse (version) {
    this._version = version || '0.0.0'
    const [major, minor, patch] = this._version.split('.') // Destructuring into small pieces

    // Checks if the index exists and, if so, returns the version parser name, otherwise returns the version number
    this._major = (this._parser.major) ? (this._parser.major[major] || major) : major
    this._minor = (this._parser.minor) ? (this._parser.minor[minor] || minor) : minor
    this._patch = (this._parser.patch) ? (this._parser.patch[patch] || patch) : patch

    return this
  }

  /**
   * Gets the patch portion of the parsed version
   *
   * @readonly
   * @memberof Codename
   */
  get patch () {
    return this._patch
  }

  /**
   * Gets the minor portion of the parsed version
   *
   * @readonly
   * @memberof Codename
   */
  get minor () {
    return this._minor
  }

  /**
   * Gets the major portion of the parsed version
   *
   * @readonly
   * @memberof Codename
   */
  get major () {
    return this._major
  }

  /**
   * Gets the glued <major>.<minor>.<patch> parsed bits of the version
   *
   * @readonly
   * @memberof Codename
   */
  get codename () {
    return `${this._major}.${this._minor}.${this._patch}`
  }

  get codenameText () {
    return `V${this._version} - ${this._major}`
  }
}

module.exports = Codename
