const express = require("express");
const ejs = require('ejs')
const ejsEngine = require('ejs-mate')
//Lấy đối tượng router từ file ./routes/index.js
const routes = require('./routes/index')

const app = express();

//setting view engine for express
app.set('view engine','ejs')
app.set('views','./views')
app.engine('ejs',ejsEngine)

//Setting static forder
app.use('/public',express.static('./public'))

// Routes
// app.get('/',(req,res)=> {
//     //tạo biến post teen Server
//     const postsTao = [
//         {
//             tieude: 'tintuc1',
//             description: 'mo ta',
//             author:'Son' ,
//             createdAt: '15/3/2021' 
//         },
//         {
//             tieude: 'tintuc2',
//             description: 'mo ta',
//             author:'Son' ,
//             createdAt: '15/3/2021' 
//         },
//         {
//             tieude: 'tintuc3',
//             description: 'mo ta',
//             author:'Son' ,
//             createdAt: '15/3/2021' 
//         },
//     ]
//     res.render('client/page/homepage',{posts:postsTao});
// })
// app.get('/post',(req,res)=> {
//     //tittle, desciption, content, author,createdAt
//     const postnew = {
//         tittle : "Son Hoang",
//         description: "Đây là mô tả",
//         content: "The Final Frontier",
//         author: "by Son",
//         createdAt: "16/03/2021"
//     }
//     // truyền dữu liệu xuống view
//     res.render('client/page/post',{post:postnew})
// })
// app.get('/about',(req,res)=> {
//     res.render('client/about')
// })
// app.get('/contact',(req,res)=> {
//     res.render('client/contact')
// })

app.use(routes)

app.listen(3000,() => {
    console.log('run');
})