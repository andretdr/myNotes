// https://www.npmjs.com/package/n-readlines
// npm i n-readlines

import lineByLine from 'n-readlines'
const liner = new lineByLine('./markdowntext.txt');

let line;
let lineNumber = 0;
 
while (line = liner.next()) {
    console.log('Line ' + lineNumber + ': ' + line.toString('ascii'));
    lineNumber++;
}
 
console.log('end of line reached');
