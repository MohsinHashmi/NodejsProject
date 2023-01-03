const dbConnect=require('./mongodb')
const dlt = async ()=>{
    const db=await dbConnect();
    const result =await db.deleteOne({
        Application:123456
    })  
    console.log(result)
}
dlt();