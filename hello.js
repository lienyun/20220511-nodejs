// hello.js
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
module.exports = {
    sayHello,
    sayHi,
    title,
};


