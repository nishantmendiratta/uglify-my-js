#!/usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
const path = require("path");
const utils = require("./utils.js");

const options = yargs
      .usage(utils.usage(chalk, boxen))
       .option("s", {alias:"source", describe: "Pass absolute path of the source js file", type: "string", demandOption: true })  
      .help(true)
      .argv;
let sourceJSPath =  options.s  || options.source;
if(options.s=== null && options.source === null){ 
  utils.showHelp(chalk, boxen); 
  return; 
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

if(options.s) {
  sourceJSPath = options.s.toLowerCase();
  console.log('sourceJSPath', sourceJSPath);
  const config = require('./webpack.config.js');
  const webpack = require('webpack');

  const compiler = webpack({...config, entry: sourceJSPath, output: {path: path.resolve('.'), filename: 'main.bundle.min.js'}});

  (async (outputMessage, chalk, console)=>{
    const response = await process(compiler);
    console.log(outputMessage(chalk));
  })(utils.outputMessage, chalk, console); 
}
