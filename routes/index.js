const express = require('express')
const router = express.Router();



// Routes
router.get('/',(req,res)=> {
    //tạo biến post teen Server
    const postsTao = [
        {
            tieude: 'tintuc1',
            description: 'mo ta',
            author:'Son' ,
            createdAt: '15/3/2021' 
        },
        {
            tieude: 'tintuc2',
            description: 'mo ta',
            author:'Son' ,
            createdAt: '15/3/2021' 
        },
        {
            tieude: 'tintuc3',
            description: 'mo ta',
            author:'Son' ,
            createdAt: '15/3/2021' 
        },
    ]
    res.render('client/page/homepage',{posts:postsTao});
})
router.get('/post',(req,res)=> {
    //tittle, desciption, content, author,createdAt
    const postnew = {
        tittle : "clean blog",
        description: "mo ta",
        content: "The Final Frontier",
        author: "by Son",
        createdAt: "16/03/2021"
    }
    // truyền dữu liệu xuống view
    res.render('client/page/post',{post:postnew})
})
router.get('/about',(req,res)=> {
    res.render('client/about')
})
router.get('/contact',(req,res)=> {
    res.render('client/contact')
})
// xuất đối tượng router ra ngoài
module.exports = router;