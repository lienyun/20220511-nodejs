//內建模組
const path = require('path')
//第三方套件
const express = require('express')
const bodyParser = require('body-parser');
const { render } = require('express/lib/response');
    //解析console.log undefined的部分
const app = express()

//自建模組

//////////////////////////////////

app.set('view engine', 'ejs');
app.set('views', 'views');

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
    res.status(200).render('index');
});

app.get('/login', (req, res) => {
    res.status(200).render('login');
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

// '*'是萬用路由，記得將萬用路由放在其他路由後面，不然所有網址都會導向這個
    //404頁面
app.get('*', (req, res) => {
    res.status(404).render('404');
});


app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});
