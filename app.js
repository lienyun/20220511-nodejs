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
    res.status(200)
        .render('index', {
            pageTitle: '結衣來ㄌ'
            //設定pageTitle參數，index.ejs那邊<%=pageTitle%>代入
        });
});

app.get('/login', (req, res) => {
    res.status(200).render('login', {
        pageTitle: '註冊成為結衣的粉絲俱樂部成員'
        
    });
});

app.post('/login', (req, res) => {
    console.log('login data', req.body);
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
		console.log('欄位尚未填寫完成！')
    }
});

app.get('*', (req, res) => {
    res.status(404).render('404', {
        pageTitle: '找不到結衣'
        
    });
});


app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});
