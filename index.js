const express =require('express')
const dbConnect =require('./mongodb.js')
const path=require('path')
const public_path=path.join(__dirname,'public')
const  app =express()

app.use(express.static(public_path))

app.get('',(req,resp)=>{
    console.log(req.query.name);
    resp.sendFile(`${public_path}/home.html`);

})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${public_path}/about.html`);
})

app.get('/feedback',(req,resp)=>{
    resp.sendFile(`${public_path}/info.html`);
})
app.get('/data',(req,resp)=>{
const main =async ()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    }
    main();
    resp.sendFile(`${public_path}/info.html`,data);
})
app.get('*',(req,resp)=>{
    resp.send('Page Not Found 404')
})
// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// })


app.listen(5001)