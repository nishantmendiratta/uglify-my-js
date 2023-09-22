module.exports = { showHelp: showHelp, parseSentence: parseSentence };

const usage = "\nUsage: uglifymyjs -s <absolute-path-to-source-js-file-to-be-minified-and-uglified>";

function showHelp() {  
 console.log(usage); 
 console.log('\nOptions:\r') 
 console.log('\t--version\t ' + 'Show version number.' + '\t\t' + '[boolean]\r') 
 console.log('\t-s, --source\t' + ' ' + 'Absolute path of the source javascript file' + '\t\t' + '[string]\r') 
 console.log('\t--help\t\t ' + 'Show help.' + '\t\t\t' + '[boolean]\n') 
} 
 
function parseSentence(words) { 
  var sentence = ""; 
  for(var i = 1; i < words.length; i++) { 
  sentence = sentence + words[i] + " "; 
  }
}