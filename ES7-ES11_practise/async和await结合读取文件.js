//引入fs模块
const fs = require("fs")




function chaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname+'/resources/插秧诗.md', (err, data) => {
            if (err) console.log(err)
            else resolve(data)
        })
    })
}

function weiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname+'/resources/为学.md', (err, data) => {
            if (err) console.log(err)
            else resolve(data)
        })
    })
}

function guanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname+'/resources/观书有感.md', (err, data) => {
            if (err) console.log(err)
            else resolve(data)
        })
    })
}

//声明一个ascyc函数
async function main() {
    let h = await chaYangShi()
    let w = await weiXue()
    let g = await guanShu()

    console.log(h.toString())
    console.log(w.toString())
    console.log(g.toString())
}

main()