const fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);
let str = buf.toString();
console.log(str.split('\n').length - 1);

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1