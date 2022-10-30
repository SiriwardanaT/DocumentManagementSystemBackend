const express = require('express')
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
//middleware usage
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("test")
})
//database connection
mongoose.connect();

app.listen(3000);

