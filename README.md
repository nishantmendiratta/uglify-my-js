# uglify-my-js
## _A simple cli tool to minify single javascript file_

[![Build status](https://github.com/nishantmendiratta/uglify-my-js/actions/workflows/tests.yaml/badge.svg)](https://github.com/nishantmendiratta/uglify-my-js/actions)


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

Please see [Portal Wallet Coding Guidelines](https://github.com/nishantmendiratta/uglify-my-js/blob/main/CODING_GUIDELINES.md) when writing your PRs.

File issues in the **Issues** tab in GitHub

# Changelog

See [CHANGELOG](./CHANGELOG.md).
Follow [ThatJsDev](https://github.com/nishantmendiratta) for new updates.
