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
<img width="453" alt="Screenshot 2023-09-23 at 8 10 32 PM" src="https://github.com/nishantmendiratta/uglify-my-js/assets/2558220/de2b239f-a89b-442b-ba18-23817c52c94b">

Output file is generated in the current directory. It will contain minified file and source-map.

### Other helpful commands  
```
> uglifymyjs —help
> uglifymyjs —version
```

# Usage Example
See [Sample](./Sample).

# Dependency
The tool is built on top of `uglifyjs-webpack-plugin`. Following is the fixed configuration currently it is using. Feel free add new issues if you want any customization.
```
{
  cache: false,
  parallel: true,
  uglifyOptions: {
    compress: {
      drop_console: true,
      warnings: false,
    },
    toplevel: true,
    keep_classnames: undefined,
    keep_fnames: false,
    nameCache: null,
    output: {
      beautify: false,
      comments: false,
    },
    compress: true,
    ecma: 6,
    mangle: true,
  },
  sourceMap: true,
}
```

# Contributing

This library is designed to support JS files - i you want to add a new language support, we'd love you to contribute them here.

Please see [Coding Guidelines](https://github.com/nishantmendiratta/uglify-my-js/blob/main/CODING_GUIDELINES.md) when writing your PRs.

File issues in the **Issues** tab in GitHub

Use [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)

# Changelog

See [CHANGELOG](./CHANGELOG.md).
Follow [ThatJsDev](https://github.com/nishantmendiratta) for new updates.
