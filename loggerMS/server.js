require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const Producer = require("./producer");
const producer = new Producer();

let app = express();

app.use(bodyParser.json("application/json"));




app.post("/sendLog", async (req, res) => {
    try{
        await producer.publishMessage(req.body.logType, req.body.message);
        res.send({success:true});
    }catch(error){
        console.log("sendLog::error ",error);
        res.send({error:error});
    }   
});


app.get("/",(req,res)=>{

    res.json({"msg":"Welcome To The Test Project"})
});

app.listen(3000,() => {
    console.log("Server started...");
})