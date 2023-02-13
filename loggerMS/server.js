const express = require("express");
const bodyParser = require("body-parser");


let app = express();

app.use(bodyParser.json("application/json"));



app.get("/",(req,res)=>{

    res.json({"msg":"Welcome To The Test Project"})
});

app.listen(3000,() => {
    console.log("Server started...");
})