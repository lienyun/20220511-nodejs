//內建模組
const path = require('path')
//第三方套件
const express = require('express')
const bodyParser = require('body-parser');
    //解析console.log undefined的部分
//自建模組

//////////////////////////////////
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
    //解析console.log undefined的部分

app.use((req, res, next) => {
	console.log('Hello!');
    next();
});

app.use((req, res, next) => {
	console.log('World!');
    next();
});

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'views','index.html'))
});



app.get('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'views','login.html'))
});

app.post('/login', (req, res) => {
    console.log('login data', req.body);
    //這邊要安裝parse才能解析 不然會undefined
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
        //如果有填寫email跟密碼，就回首頁
    } else {
				console.log('欄位尚未填寫完成！')
    }
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});
