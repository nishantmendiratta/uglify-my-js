const inputMessage = (chalk) =>
  `${chalk.yellow('Usage:')} ${chalk.red(
    'uglifymyjs -s /absolute-path-to-source-js-file.js'
  )}`;
const outputMessage = (chalk) =>
  `${chalk.yellow('\nOutput:')} ${chalk.blue(
    "'main.bundle.min.js' is generated in the same folder."
  )}`;
const usage = (chalk, boxen) =>
  boxen(`${inputMessage(chalk)}${outputMessage(chalk)}`);

function showHelp(chalk, boxen) {
  console.log(usage(chalk, boxen));
}

module.exports = { showHelp, usage, outputMessage };
