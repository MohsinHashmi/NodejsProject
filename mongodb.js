const {MongoClient}=require('mongodb');
// const url="mongodb://127.0.0.1:27017";   
const uri ="mongodb+srv://mh22:090078641@cluster0.9nglnih.mongodb.net/?retryWrites=true&w=majority";
const db='test_db';
const client =new MongoClient(uri);

async function dbConnect(){
    let response= await client.connect();
    let dbx = response.db(db);
    // console.log(dbx.collection('test_col'));
    return dbx.collection('test_col');
    // let result = await collection.find({}).toArray();
    // console.log(result);
}
module.exports=dbConnect;