const express = require("express");
const ejs = require('ejs')

const app = express();
//setting view engine for express
app.set('view engine','ejs')
app.set('views','./views')

//Setting static forder
app.use('/public',express.static('./public'))


app.get('/Trangchu',(req,res) => {
    res.send('<a href= "/chuyenmuc"> hello world</a>')
})
// trang chuyen mục
app.get('/chuyenmuc',(req,res) =>{
    res.send('chào mừng đén với chuyên mục')
})

// Trang tuong tac
app.get('/contact',(req,res) => {
    res.send('liên hệ')
})

app.get('/contact/:name/:age',(req,res)=>{
    const postid = res.params.name;
    const post = res.params.age;
    res.send('nguyễn thanh sơn ')
})

app.listen(3000,() => {
    console.log('run');
})