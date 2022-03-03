var url = require('url');
var adrs = 'http://localhost:8081/home.html?year=2022&month=march'

var q = url.parse(adrs, true)

console.log(q.host)
console.log(q.pathname)
console.log(q.search)