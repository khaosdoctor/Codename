# Codename

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm version](https://badge.fury.io/js/%40khaosdoctor%2Fcodename.svg)](https://badge.fury.io/js/%40khaosdoctor%2Fcodename) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/khaosdoctor/Codename/master/LICENSE) [![Codename](https://img.shields.io/badge/codename-Aries-orange.svg)](https://github.com/khaosdoctor/Codename/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/91a0f8a91997485c96b2493dce36de01)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=khaosdoctor/Codename&amp;utm_campaign=Badge_Grade) [![codecov](https://codecov.io/gh/khaosdoctor/Codename/branch/master/graph/badge.svg)](https://codecov.io/gh/khaosdoctor/Codename) [![Build Status](https://travis-ci.org/khaosdoctor/Codename.svg?branch=master)](https://travis-ci.org/khaosdoctor/Codename)

> Parsing your semantic version numbers into awesome version names!

## Summary

<!-- TOC -->

- [Codename](#codename)
  - [Summary](#summary)
  - [What is it?](#what-is-it)
  - [Usage](#usage)
    - [Parsers](#parsers)
  - [Some examples and parsers](#some-examples-and-parsers)

<!-- /TOC -->

## What is it?

This is a fun project to transform your boring [Semantic Version](http://semver.org) numbers like `1.2.3` into __awesome__ badass codenames.

This means you can give your project version an alias so you can call it by name, for instance, let's give Pokémon™ names to our versions. So `1.2.3` would be turned into the pokédex number:

- `major` is `1`, which translates to [`Bulbasaur`](http://www.pokemon.com/br/pokedex/bulbasaur)
- `minor` is `2`, which translates to [`Ivysaur`](http://www.pokemon.com/br/pokedex/ivysaur)
- `patch` is `3`, which translates to [`Venusaur`](http://www.pokemon.com/br/pokedex/venusaur)

Your full project codename would be: `V1.2.3 - Bulbasaur` (or `V Bulbasaur.Ivysaur.Venusaur` but this is not pretty).

## Usage

First, install the package by issuing:

```sh
npm i @khaosdoctor/codename --save
```

Or, if you like yarn:

```sh
yarn add @khaosdoctor/codename
```

Then, in your project require it as `const codename = require('@khaosdoctor/codename')`

### Parsers

Codename uses parsers to parse your version name. A parser is a simple object that follows the structure:

```js
module.exports = {
  major: [
    'codename0',
    'codename1',
    'codename2',
    'codename3',
    'codename4',
    ...
  ],
  minor: [
    'codename0',
    'codename1',
    'codename2',
    'codename3',
    'codename4',
    ...
  ],
  patch: [
    'codename0',
    'codename1',
    'codename2',
    'codename3',
    'codename4',
    ...
  ]
}
```

Or also:

```js
module.exports = {
  major: {
    'majorNumber': 'name',
    'majorNumber': 'name',
    'majorNumber': 'name',
    'majorNumber': 'name',
    'majorNumber': 'name',
    ...
  },
  minor: {
    'minorNumber': 'name',
    'minorNumber': 'name',
    'minorNumber': 'name',
    'minorNumber': 'name',
    'minorNumber': 'name',
    ...
  },
  patch: {
    'patchNumber': 'name',
    'patchNumber': 'name',
    'patchNumber': 'name',
    'patchNumber': 'name',
    'patchNumber': 'name',
    ...
  }
}
```

> __Note:__ If one of the indexes (major, minor or patch) is omitted, the original version number will be used

> __Another note:__ Using arrays will start the count on index `0` (as every array), if you wish to specify version numbers for specific names, use objects instead

After that you can simply instantiate with a parser and _have fun!_

Let's use Pokémon™ again:

```js
const codename = require('khaosdoctor/codename')(yourParser) // This is a Pokémon™ parser
const myVersion = require('./package.json').version // 1.2.3

console.log(codename.parse(myVersion).major) // Would output 'Bulbasaur'

console.log(codename.parse(myVersion).minor) // Would output 'Ivysaur'

console.log(codename.parse(myVersion).patch) // Would output 'Venusaur'

console.log(codename.parse(myVersion).codename) // Would output 'Bulbasaur.Ivysaur.Venusaur'

console.log(codename.parse(myVersion).codenameText) // Would output 'V1.2.3 - Bulbasaur'
```

That's it.

## Some examples and parsers

- [codename-zodiac](https://github.com/khaosdoctor/codename-zodiac): Outputs Zodiac Signs for each version number (starting on `1`, major only)
- [codename-greek](https://github.com/khaosdoctor/codename-greek): Outputs greek letters for version numbers
- [codename-greek-gods](https://github.com/khaosdoctor/codename-greek-gods): Outputs greek god names for major version numbers, demigod names for minor version numbers and hero names for patches (start on `1`)
- [codename-titans](https://github.com/khaosdoctor/codename-titans): Outputs greek titan names for version numbers (start on `1`, major only)
- [codename-nordic](https://github.com/khaosdoctor/codename-nordic): Outputs nordic gods names for version numbers (starting on `1`, major only)
- [codename-zodiac-warriors](https://github.com/khaosdoctor/codename-zodiac-warriors): Outputs zodiac warriors names for version numbers (starting on `1`, major only)
- [codename-universe](https://github.com/khaosdoctor/codename-universe): Outputs star names for major version numbers (start on `0`), constellation names for minor numbers and moon names for patch numbers

> Add yours here by submiting a PR! :smile: