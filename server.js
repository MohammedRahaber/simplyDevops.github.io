const express=require("express");
const path = require('path')
const app=express();

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'','hello.html'))
})
app.listen(500,()=>console.log('server running........'))