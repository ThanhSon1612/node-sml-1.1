const express = require("express");
const ejs = require('ejs')

const app = express();
//setting view engine for express
app.set('view engine','ejs')
app.set('views','./views')

//Setting static forder
app.use('/public',express.static('./public'))

// Routes
app.get('/',(req,res)=> {
    res.render('client/index')
})

// app.get('/contact/:name/:age',(req,res)=>{
//     const postid = res.params.name;
//     const post = res.params.age;
//     res.send('nguyễn thanh sơn ')
// })

app.listen(3000,() => {
    console.log('run');
})