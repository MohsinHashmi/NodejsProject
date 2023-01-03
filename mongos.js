const { Int32 } = require('mongodb');
const mongoos=require('mongoose');
const express=require('express');
const app=express();

const Insert = async () =>{
    let data=new ProductsModel({
        application:123456,
        title:"This is just for testing purpose only"
    });
    
    let result=await data.save();
    console.log(result);

}

const UpdateRec = async () =>{
    await mongoos.connect("mongodb://127.0.0.1:27017/Tmdb")
    let result=await data.updateOne(
        {
            application:123456
        },
        {$set:{
            title:"Test Updated Successfully"}});
    console.log(result);

}
const GetAll = async () =>{
    const data= await mongoos.connect("mongodb://127.0.0.1:27017/Tmdb")
    
    let result=await data.db.find().toArray();
    console.log(result);

}
const deldata= async()=>{
    const data=await mongoos.connect("mongodb://127.0.0.1:27017/Tmdb")
    let result=await  data.deleteOne({
        Application:123456
    })  
    console.log(result)
}

app.get('',async(req,resp)=>{
    console.log(GetAll());
})

app.post('',async(req,resp)=>{
    resp=Insert();
    console.log(resp);
})
app.put('',async(req,resp)=>{
    resp=UpdateRec();
    console.log(resp);
})
app.listen(5001);