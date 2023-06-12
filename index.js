const express = require("express");
const { transpoter, mailOptions } = require("./service/emailservice");
const cron = require("node-cron");
var fs = require("fs");
// var http = require("http");

require("dotenv").config();
require("./models/config");

// const userRouter = require("./router/userRouters");
// const companyRouter = require("./router/companyRouter");
const joi  = require("joi");
const reviewRouter = require("./router/mainrouters");

// const userrouter = require('../router/userRouter/');
// const companyrouter = require('./router/companyRouter');

const app = express();
app.get("/send", async (req, res) => {
  transpoter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent suceesfully" + info.response);
    }
  });
});

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use("/", reviewRouter);

// app.use(bodyParser.json())

// app.use("/", userRouter);
// app.use("/", companyRouter);
//creating
// cron.schedule("*/5 * * * * *", function(){
//     console.log("running a task every 5 second");

//     // transpoter.sendMail(mailOptions,(error,info)=>{
//     //     if(error){
//     //         console.log(error);
//     //     }else{
//     //         console.log('email sent suceesfully'+ info.response)
//     //     }
//     // });
// });
// var buffer = Buffer.alloc(10);
// console.log(buffer);
// buffer.write("hello class");
// console.log(buffer);
app.get("/getfile",(req,res)=>
{
  var content = ''
  var reader = fs.createWriteStream('demo.txt')
  reader.setEncoding('utf-8')
 reader.on('error',function(err){
  console.log(err);
 }).on('data',function(chunk){
  content +=chunk
 }).on('end',function(err){
  console.log(err);
 })
 res.setHeader('200',{'Content-Type':'plain/text'})
 res.write(content)
 res.end()


app.listen(7000, (req, res) => {
  console.log('Port :')
  res.send("hello server");
  console.log("server is runing on:7000");
});
})
