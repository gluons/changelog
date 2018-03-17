# Changelog
[![license](https://img.shields.io/github/license/gluons/changelog.svg?style=flat-square)](./LICENSE)
[![npm](https://img.shields.io/npm/v/ch-log.svg?style=flat-square)](https://www.npmjs.com/package/ch-log)
[![npm](https://img.shields.io/npm/dt/ch-log.svg?style=flat-square)](https://www.npmjs.com/package/ch-log)
[![Travis](https://img.shields.io/travis/gluons/changelog.svg?style=flat-square)](https://travis-ci.org/gluons/changelog)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://github.com/carloscuesta/gitmoji)

📝 Generate changelog from GitHub releases.

## Installation

Via [NPM](https://www.npmjs.com):

[![NPM](https://nodei.co/npm/ch-log.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/ch-log)

```
npm install --global ch-log
```

Via [Yarn](https://yarnpkg.com):

```
yarn global add ch-log
```

## Usage

```
Generate changelog from GitHub releases.

Usage: changelog [<GitHub repo slug>]

Options:
  --help, -h     Show help                                             [boolean]
  --version, -v  Show version number                                   [boolean]
  --token, -t    GitHub access token                                    [string]

Examples:
  changelog                            Generate changelog from repository in current working directory.
  changelog gluons/vue-github-buttons  Generate changelog from gluons/vue-github-buttons repository on GitHub.
```
