#!/usr/bin/env node
const yargs = require("yargs");
const path = require("path");
const utils = require("./utils.js");

const usage = "\nUsage: uglifymyjs -s '/source.js'";


const options = yargs
      .usage(usage)
       .option("s", {alias:"source", describe: "Pass absolute path of the source javascript file", type: "string", demandOption: true })  
      .help(true)
      .argv;
let sourceJSPath =  options.s  || options.source;
if(options.s=== null && options.source === null){ 
  utils.showHelp(); 
  return; 
} 

async function process(compiler) {
  await new Promise((resolve, reject) => {
    compiler.run((err, res) => {
      console.log('err', err)
      console.log('res', res)
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

  const compiler = webpack({...config, entry: sourceJSPath, output: {path: path.resolve('.'), filename: '[name].bundle.min.js'}});

  (async ()=>{
    const response = await process(compiler);
    console.log('response', response);
  })(); 
}
