var http = require('http')

http.createServer((req, res) => {
    res.write('Hello World' + req.url)
    res.end()
    console.log('server is running...')

}).listen(8081)
