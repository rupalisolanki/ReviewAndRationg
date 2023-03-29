require('dotenv').config()
const express = require('express')
const bcrypt = require("bcrypt");
require('./models/config')
const userRouter = require('./router/userRouters')

const app = express()

app.use('/' , userRouter)


app.listen(7000,(req,res)=>{
    console.log('server is runing on:7000')
})
