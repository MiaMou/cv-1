// 使用API获取demo 和 style 分别放html 和css
let html = document.querySelector('#html')
let style = document.querySelector('#style')

// 往demo里写内容  // demo.innerHTML = 1
// string 是用来保存我们要展示的结果的       // 不加注释会影响css
let string = `/* 你好，我叫Mia
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div 
 */
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 */
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
*/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);   
}
`
// string2 是用来缓存我们要显示到屏幕上的结果的
let string2 = ''
// 从0开始可以做 数组 或 字符串 下标
let n = 0

// substring(0, n) 显示 string 的 第0个--第n-1个
// demo.innerHTML = string.substring(0, n)

// 把js中的回车变成html里的回车，因为我们是在html里写内容
// string = string.replace("\n", "<br>")
// 但是不成功，因为replace只会把第一个回车变了，后面的回车不变，所以我们可以用正则表达式,就可以把所有回车变成功
// string = string.replace("/\n/g", "<br>")
// 但是又有问题，因为字是一个一个打的，所以会看到 < 这个尖括号闪现
// 所以要重新想别的方法


let step = () => {
    // step()目的是0.1s后 把n加1 并显示到页面 再调step()     //setTimeout()让字是移动变化的
    setTimeout(() => { 
        if(string[n] === "\n") {
            // 如果当前的字符是回车，就加回车，不会出现多余的尖括号
            string2 += "</br>"
        } else if(string[n] === " ") {
            string2 += "&nbsp;"
        }else {
            // 之前demo.innerHTML = string.substring(0, n) 是直接显示到页面里，现在不这样
            // 而是第0次把第0个字符加进来，第1次把第一个加进string2……每次把string的东西搬过来
            // 如果当前字符不是回车 就照搬
            string2 += string[n]
        }

        // // 上面代码如果只有一个if...else..可以优化成三元表达式
        // string2 += string[n] === "\n" ? "<br>" : string[n]

        // 然后将 string2 写进html就好了,  同时让css生效
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        // js设置滚动条
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)

        if(n < string.length-1) {
            // 如果n不是最后一个就继续，到了就停止
            n += 1
            step()
        }             
    }, 50)    
}
step();
