// hello.js
const path = require('path')

const sayHello = () => {
    console.log('Hello!');
};
const sayHi = () => {
    console.log('Hiiii!');
};
const title = 'I am Modules';


//匯出sayHello為helloModule
module.exports.helloModule = sayHello;

//物件寫法
// module.exports = {
//     sayHello: sayHello,
//     sayHi: sayHi,
//     title: 'Hello Title'
// };

//當key=value 可以簡寫
// module.exports = {
//     sayHello,
//     sayHi,
//     title,
// };

//可以印出模組路徑、檔案名稱的預設屬性 __dirname （查詢所在資料夾）及 __filename （查詢包含路徑的完整檔案名稱）
console.log('dirname', __dirname);
console.log('filename', __filename);
console.log(path.join(__dirname,'index.js'))

// console.log('modules',module)
