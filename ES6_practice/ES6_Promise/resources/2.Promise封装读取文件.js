
//1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法读取文件
// fs.readFile('./resources/为学.md', (err, data)=>{
//     //如果失败, 则抛出错误
//     if(err) throw err;
//     //如果没有出错, 则输出内容
//     console.log(data.toString());
// });

// 3.  使用Promise 封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('./resources/为学.md', (err, data) => {
        if (err) reject(err)
        resolve(data)
    });
})

p.then(function (value) {
    console.log(value.toString())
},function (reason) {
    console.log(value.warn())
})