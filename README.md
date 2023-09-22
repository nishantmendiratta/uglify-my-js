# uglify-my-js
## _A simple cli tool to minify single javascript file_

[![Build status](https://github.com/nishantmendiratta/uglify-my-js/actions/workflows/npm-publish-github-packages.yml/badge.svg?branch=main)](https://github.com/nishantmendiratta/uglify-my-js/actions)

[![Node version](https://img.shields.io/badge/node-%3E=v12.18.2-green)](https://nodejs.org/)
[![Npm version](https://img.shields.io/badge/npm-6.14.5-blue)](https://nodejs.org/)
[![install size](https://packagephobia.com/badge?p=uglify-my-js)](https://packagephobia.com/result?p=uglify-my-js)

## Installation
```
npm i uglify-my-js@latest
```

Requires [Node.js](https://nodejs.org/) v10+ to run.

## Usage
```
    > uglifymyjs -s /your-project/absolute-path/function.js
    [-s] means source. This argument is mandatory. It should be an absolute path to local file.
```
Output file is generated in the current directory. It will contain minified file and source-map
    - _main.bundle.min.js_
    - _main.bundle.min.js.map_

### Other helpful commands  
```
> uglifymyjs —help
> uglifymyjs —version
```

# Contributing

This library is designed to support JS files - i you want to add a new language support, we'd love you to contribute them here.

Please see [Coding Guidelines](https://github.com/nishantmendiratta/uglify-my-js/blob/main/CODING_GUIDELINES.md) when writing your PRs.

File issues in the **Issues** tab in GitHub

# Changelog

See [CHANGELOG](./CHANGELOG.md).
Follow [ThatJsDev](https://github.com/nishantmendiratta) for new updates.