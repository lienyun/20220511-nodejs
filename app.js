//內建模組
const http = require('http');

//第三方套件

//自建模組

//////////////////////////////////
//req = request
//res = response

const server = http.createServer((req, res) => {
    console.log('req url', req.url);
    if (req.url === '/') {
        return res.end('This is home page');
    } 
		if (req.url === '/login') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        //MIME type 若改成text/plain就不會render出HTML
        return res.end('<h2>cant render Chinese</h2>');
        //確定處理好，就return，把程式暫停
    } 
    if (req.url === '/wow') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        return res.end('<h1>WOWOWOWOWOW</h1>');
    } 
    res.end('page not found :(');
});

server.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});

//3000是port號
