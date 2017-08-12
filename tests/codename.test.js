import describe from 'ava'
import Codename from '../src/codename'

describe.beforeEach((test) => {
  test.context.parser = {
    major: {
      '1': 'Aries',
      '2': 'Virgo',
      '3': 'Pisces'
    },
    minor: {
      '1': 'Sun',
      '2': 'Aldebaran',
      '3': 'Sirius'
    },
    patch: {
      '1': 'Calisto',
      '2': 'Io',
      '3': 'Ganimede'
    }
  }
  test.context.instance = new Codename(test.context.parser)
  test.context.version = '1.2.3'
})

describe('Should return the version number', (assert) => {
  const version = assert.context.instance.parse(assert.context.version)._version

  assert.deepEqual(version, assert.context.version)
})

describe('Should return 0.0.0', (assert) => {
  const version = assert.context.instance.parse(null)._version

  assert.deepEqual(version, '0.0.0')
})

// ---- //

describe('Should return the major parsed version number', (assert) => {
  const major = assert.context.instance.parse(assert.context.version).major

  assert.deepEqual(major, assert.context.parser.major[assert.context.version.split('.')[0]])
})

describe('Should return the minor parsed version number', (assert) => {
  const minor = assert.context.instance.parse(assert.context.version).minor

  assert.deepEqual(minor, assert.context.parser.minor[assert.context.version.split('.')[1]])
})

describe('Should return the patch version number', (assert) => {
  const patch = assert.context.instance.parse(assert.context.version).patch

  assert.deepEqual(patch, assert.context.parser.patch[assert.context.version.split('.')[2]])
})

// ---- //

describe('Should return the major version number', (assert) => {
  const major = new Codename({major: ['Aries']}).parse(assert.context.version).major

  assert.deepEqual(major, assert.context.version.split('.')[0])
})

describe('Should return the minor version number', (assert) => {
  const minor = new Codename({minor: ['Calisto']}).parse(assert.context.version).minor

  assert.deepEqual(minor, assert.context.version.split('.')[1])
})

describe('Should return the patch version number', (assert) => {
  const patch = new Codename({patch: ['Europa']}).parse(assert.context.version).patch

  assert.deepEqual(patch, assert.context.version.split('.')[2])
})

// ---- //

describe('Should return the full codename', (assert) => {
  const codename = assert.context.instance.parse(assert.context.version).codename

  assert.deepEqual(codename, `${assert.context.parser.major[assert.context.version.split('.')[0]]}.${assert.context.parser.minor[assert.context.version.split('.')[1]]}.${assert.context.parser.patch[assert.context.version.split('.')[2]]}`)
})

describe('Should return the full codename with pretty name', (assert) => {
  const codename = assert.context.instance.parse(assert.context.version).codenameText

  assert.deepEqual(codename, `V${assert.context.version} - ${assert.context.parser.major[assert.context.version.split('.')[0]]}`)
})
