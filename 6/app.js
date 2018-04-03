const http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8'); //Stream that you get from http.get() also has a  
  //setEncoding() method  call this method with "utf8", the "data"  
  //events will emit Strings rather than the standard Node Buffer objects  
  //which you have to explicitly convert to Strings
  response.on('data', console.log);
  response.on('error', console.error);
});