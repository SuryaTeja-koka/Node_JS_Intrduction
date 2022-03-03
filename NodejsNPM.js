// larger ecosystem of libraries
// npm install < package_name> 
// I have installed the upper-case module -- just type the command `npm i upper-case` inside your terminal before coming to the below code

var http = require('http')
var uc = require('upper-case')

http.createServer((req, res) => {
    res.write(uc.upperCase('hello world!!!'));
    res.end();
}).listen(8081)
