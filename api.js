const dbConnect=require('./mongodb');
const express=require('express');
const mongodb=require('mongodb')
const { MongoDBNamespace } = require('mongodb');
const app=express();

app.use(express.json())
app.get('',async(req,resp)=>{
    const db= await dbConnect();
    const data=await db.find().toArray();
    resp.send(data);
})


app.post('',async(req,resp)=>{
    const db= await dbConnect();
    const data=await db.insertOne(
        {Application:121,  
            Title:"usaid2312"}
    )
    console.log(data);
    resp.send(data);
})

app.put('/',async(req,resp)=>{
    const db= await dbConnect();
    const data= await db.updateOne(
        {Application:req.body.Application},
        {$set:req.body}
        )
    resp.send(req.body);
})


app.delete('/:id',async(req,resp)=>{
    const db= await dbConnect();
    const data=await db.deleteOne({_id:mongodb.ObjectId(req.params.id)})
    resp.send(data);
})





app.listen(5001);