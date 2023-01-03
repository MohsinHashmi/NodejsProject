const dbConnect=require('./mongodb')
const updatex=async()=>{
    const db=await dbConnect();
    const result=await db.updateOne({
        Application:121233456},{
        $set:
        {
        Application:"000000",
        Title:"Hashmi"
    }})
    console.log(result);
}
updatex();