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


app.get('/', (req, res) => {
    res.status(200)
        .render('index', {
            pageTitle: '結衣來ㄌ',
            products: products // 將常數 products 賦予給 路由參數 products
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


const products = [
    {
        title: 'SWITCH影視文藝特寫2020-2021 NO.1：新垣結衣＆星野源',
        price: 470,
        description: '',
        imageUrl: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/011/85/M010118594.jpg&v=5fd036aa&w=348&h=348'
    },
    {
        title: '新垣結衣寫真集：YUI ARAGAKI NYLON JAPAN ARCHIVE BOOK 2010-2019',
        price: 3189,
        description: '',
        imageUrl: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/009/97/M010099779.jpg&w=374&h=374&v=5db6a70c'
    },
    {
        title: '新垣結衣寫真集：純白18',
        price: 1150,
        description: '',
        imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M02/000/53/M020005381.jpg&v=59f156d3&w=348&h=348'
    },
];