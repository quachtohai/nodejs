const express = require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log("Server on port: 8000")
})

app.get('/',(req,res)=>{
    res.json("Nodejs to jenkins in pipeline")
})
