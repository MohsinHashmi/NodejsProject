const express=require('express');
require('./config');
const model=require('./mongose_model');

const app=express();

app.use(express.json());

app.post("/crt",async (req,resp) =>{
    let data = new model(req.body);
    let result= await data.save();
    resp.send(result);
});





app.get("/",async (req,resp) =>{
    let data = await model.find();
    resp.send(data);
});

app.get("/fnd/:key", async (req,resp) =>{
    console.log(req.params.key)
    let data = await model.find({
        "$or":[
        {"title":{$regex:req.params.key}}]
    });
    resp.send(data);
});

app.delete("/del/:_id",async(req,resp)=>{
    let data=await model.deleteOne(req.params);
    resp.send(data);

})

app.put("/upd/:_id",async (req,resp) => {
    console.log(req.params);
    let data=await model.updateOne(
        req.params
        ,{
            $set:req.body
         }
        );
    resp.send(data);

})
app.listen(5001);