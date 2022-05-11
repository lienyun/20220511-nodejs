//內建模組
const path = require('path')
//第三方套件
const express = require('express')
//自建模組

//////////////////////////////////
const app = express()

//middleware 介於req and res中間


app.use((req, res, next) => {
	console.log('Hello!');
    next();
});
//沒有next();的話，就只會印出Hello
app.use((req, res, next) => {
	console.log('World!');
    next();
});

//處理get請求(瀏覽器)
app.get('/', (req, res) => {
    //用原生方式寫，很複雜↓
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('<head><meta charset="utf-8" /></head>')
    // res.write('<body>')
    // res.write('<h1>這是首頁</h1>')
    // res.write('</body>')
    //使用express寫↓可以直接連接html印在網頁上
    res.status(200).sendFile(path.join(__dirname,'views','index.html'))
});


app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});