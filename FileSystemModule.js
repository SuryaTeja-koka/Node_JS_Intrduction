// Displaying the file content

// var http = require('http');
// var fs = require('fs');
// http.createServer((req, res) => {
//     fs.readFile('test.txt', (err, data) => {
//         res.write(data);
//         res.end();
//     })
//     console.log('server is running...')

// }).listen(8081)




// Appending data to the end of the file (shows an error inside the console)


// var http = require('http');
// var fs = require('fs');
// http.createServer((req, res) => {
//     fs.appendFile('test.txt', ' I am appended content', (err, data) => {
//         res.write(data);
//         res.end();


//     })
//     console.log('server is running...')

// }).listen(8081)



// OverWriting the file content (entire text is deleted and our code is kept inside) -- There is an error shown inside the console

// The below code can also be used to create a new file also

// var http = require('http');
// var fs = require('fs');
// http.createServer((req, res) => {
//     fs.writeFile('test.txt', 'Content is Overridden', (err, data) => {
//         res.write(data);
//         res.end();


//     })
//     console.log('server is running...')

// }).listen(8081)



// Deletion on file

var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    fs.unlink('test.txt', (err) => {
        if (err) throw err;
        console.log('File Deleted');
    })
    console.log('server is running...')

}).listen(8081)