//內建模組
const http = require('http');

//第三方套件

//自建模組

//////////////////////////////////

const server = http.createServer((req, res) => {
    console.log('req url', req.url);
    if (req.url === '/') {
        return res.end('This is home page');
    } 
		if (req.url === '/login') {
        return res.end('This is login page');
    } 
    res.end('page not found :(');
});

server.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});

//3000是port號
