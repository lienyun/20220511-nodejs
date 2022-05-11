//內建模組
const path = require('path')
const http = require('http')

//第三方套件
const cowsay = require('cowsay');
//自建模組

const hello = require('./hello')

//////////////////////////////////


let sentences = ['Kelly~~', '早日', '康復哞哞哞'];

sentences.forEach((sentence) => {
    console.log(cowsay.say({
        text : sentence,
        e : "^^",
        T : "U "
    }));
});