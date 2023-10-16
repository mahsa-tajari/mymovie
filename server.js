const express = require("express");
const app = express();
const path = require('path');
 app.use(express.static("public"));

 app,get("/",function(req,res){
    res.sendFile(path.join(__dirname + "/index.html"));
 });
const router = jsonServer.router('./data/db.json');
 app.listen(3000,()=>{
    console.log('done')
 })