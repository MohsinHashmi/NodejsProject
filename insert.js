const dbConnect=require('./mongodb')
const insert= async () => {
    const db= await dbConnect();
    const result = await db.insertOne(
        {Application:121233456,  
            Title:"Mohsi12312"}
            );
        console.log(result);

}
insert();