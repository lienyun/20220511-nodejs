//內建模組

//第三方套件
const express = require('express')
//自建模組

//////////////////////////////////
const app = express()

//middleware 介於req and res中間
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<head><meta charset="utf-8" /></head>')
    res.write('<body>')
    res.write('<h1>這是首頁</h1>')
    res.write('</body>')
});


app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});