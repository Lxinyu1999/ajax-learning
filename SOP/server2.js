const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
    // 响应一个页面
    res.sendFile(__dirname + '/index.html'); // __dirname 是一个在 Node.js 环境中提供的全局变量，它表示当前运行的脚本所在的目录的绝对路径。
})

// jsonp服务
app.all('/jsonp',(req,res)=>{
    // 返回一段js代码，用于<script>标签内部
    res.send('console.log("Hello JSONP!")');
})

// 讲解cors用的路由规则
app.all('/cors',(req,res)=>{
    // 设置CORS响应头
    // 允许跨域，所有域名均可以
    res.header('Access-Control-Allow-Origin','*')
    res.send('Hello CORS！')
})


app.get('/data',(req,res)=>{
    res.send('用户数据模拟')
})
app.listen(9000,()=>{
    console.group("9000 服务已经启动....")
})