#!/usr/bin/env node
const yargs = require('yargs');
const chalk = require('chalk');
const boxen = require('boxen');
const path = require('path');
const webpack = require('webpack');
const utils = require('./utils.js');
const config = require('./webpack.config.js');

const options = yargs
  .usage(utils.usage(chalk, boxen))
  .option('s', {
    alias: 'source',
    describe: 'Pass absolute path of the source js file',
    type: 'string',
    demandOption: true,
  })
  .help(true).argv;
let sourceJSPath = options.s || options.source;
if (options.s === null && options.source === null) {
  utils.showHelp(chalk, boxen);
}

async function process(compiler) {
  await new Promise((resolve, reject) => {
    compiler.run((err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
}

if (options.s) {
  sourceJSPath = options.s.toLowerCase();
  console.log('sourceJSPath', sourceJSPath);
  const compiler = webpack({
    ...config,
    entry: sourceJSPath,
    output: { path: path.resolve('.'), filename: 'main.bundle.min.js' },
  });

  (async (outputMessage, chalkInstance, console) => {
    await process(compiler);
    console.log(outputMessage(chalkInstance));
  })(utils.outputMessage, chalk, console);
}
