const express=require('express');
const multr=require('multer');
const app=express();


const upload = multr({
    storage: multr.diskStorage({
        destination: function(req,file,cb){
            cb(null,"uploads");
        },
        filename: function(req,file,cb){
            cb(null,file.fieldname +"-"+ Date.now() +".jpg");
        }
    })
}).single("user_file");

app.post("/upload", upload ,(req,resp)=>{
    resp.send("File uploaded")
})

app.listen(5001);