/* 1. 引入express */
const express = require('express');

/* 2. 创建应用对象 */
const app = express();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 3. 创建路由规则 */
// request是对请求报文的封装；response是对响应报文的封装

// 为get方法且路径是/server的请求设置路由规则
app.get('/server',(request,response)=> // 如果请求行的第二段内容，也就是url的路径是 ‘/server’ 的话，就会调用下方的箭头函数，并用response响应
    {
        // 设置响应头，允许跨域，就死记硬背得了。
        response.setHeader("Access-Control-Allow-Origin",'*')

        // 设置响应
        response.send("Hello Ajax!")
    }
);

// 为post方法设置路由规则
app.post('/server',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')   
    res.send("Hello Ajax POST!")
})

// all表示可以接受任意类型的请求：get，post，delete..
app.all('/server',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    // *表示可以接收任何类型的请求头
    res.setHeader("Access-Control-Allow-Headers","*")
    res.send("Hello Ajax POST!")
})


// 设置json-server
app.all('/json-server',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    // *表示可以接收任何类型的请求头
    res.setHeader("Access-Control-Allow-Headers","*")

    // 响应json数据
    const data = {
        'name':'日天哥'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 返回之
    res.send(str)
})




// 为axios请求设置路由规则
app.all('/axios-server',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    // *表示可以接收任何类型的请求头
    res.setHeader("Access-Control-Allow-Headers","*")
    
    const data = {
        name:'日天哥',
        tool:'axios'
    }
    res.send(JSON.stringify(data))
})

// 为IE浏览器设置路由规则
app.all('/ie',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    // *表示可以接收任何类型的请求头
    res.setHeader("Access-Control-Allow-Headers","*")
    res.send("Hello IE!")
})


// 延时响应
// 我们故意延时三秒钟在做出响应
app.all('/delay',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')   

    setTimeout(()=>{
        res.send("延时响应！")
    },3000)

})


// fetch服务
app.all('/fetch-server',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    // *表示可以接收任何类型的请求头
    res.setHeader("Access-Control-Allow-Headers","*")
    
    const data = {
        name:'日天哥',
        tool:'axios'
    }
    res.send(JSON.stringify(data))
})




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 4. 监听端口启动服务 */
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中.... ")
})

