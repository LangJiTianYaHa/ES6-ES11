// import * as m1 from "./hello.js";
//获取元素
// const btn = document.getElementById('btn');

// btn.onclick = function(){
//     import('./hello.js').then(module => {
//         module.hello();
//     });
// }

// import { hello } from "./hello.js";

const btn = document.getElementById('btn')

btn.onclick = function () {
    // hello()
    //动态 import 加载
    import('./hello.js').then(module =>{
        module.hello()
    })
    
}