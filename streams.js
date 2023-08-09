const fs = require('fs');

//arguments to readStream -> source file, encoding
//arguments to writeStream -> destination file.

const readStream = fs.createReadStream('./Text/data.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./Text/dataout.txt');
// readStream.on(`data`, (chunk)=>{
//     console.log(`.........NEW CHUNK......`)
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);

// });

//piping
readStream.pipe(writeStream);