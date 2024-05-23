const express = require('express');

const {connectToMongoDB}=require('./connection')

const cookieParser=require('cookie-parser')

const urlRoute=require('./routes/url')

const userRoute=require('./routes/user')

const {restrictedToLoggedinUserOnly,checkAuth}=require("./middlewares/auth")

const staticRoute=require("./routes/staticRouter")

const path = require('path');


const URL=require("./models/url");
 
const app=express()
const PORT=8000;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log("connected to mongoDb"))

app.use(cookieParser());
 
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))



app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/url",restrictedToLoggedinUserOnly,urlRoute)
app.use("/",checkAuth,staticRoute)

app.use("/user",userRoute)


app.listen(PORT,()=>{console.log(`Server Started at PORT : ${PORT}`);})