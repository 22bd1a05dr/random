const express = require("express");
const app=express()

const port = 2000;
app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/test",(req,res)=>{
    res.sendFile("C:/languages/WTpractice/public/kmit.html")
})

app.listen(port,()=>{
    console.log(`Port running on ${port}`)
})