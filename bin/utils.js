const inputMessage = (chalk) => `${chalk.yellow("Usage:")} ${chalk.red("uglifymyjs -s /absolute-path-to-source-js-file.js")}`
const outputMessage = (chalk) => `${chalk.yellow("\nOutput:")} ${chalk.blue("'main.bundle.min.js' is generated in the same folder.")}`
const usage = (chalk, boxen) => boxen(`${inputMessage(chalk)}${outputMessage(chalk)}`);


function showHelp(chalk, boxen) {  
 console.log(usage(chalk, boxen)); 
 console.log('\nOptions:\r') 
 console.log('\t--version\t ' + 'Show version number.' + '\t\t' + '[boolean]\r') 
 console.log('\t-s, --source\t' + ' ' + 'Absolute path of the source javascript file' + '\t\t' + '[string]\r') 
 console.log('\t--help\t\t ' + 'Show help.' + '\t\t\t' + '[boolean]\n') 
}

module.exports = { showHelp, usage, outputMessage };