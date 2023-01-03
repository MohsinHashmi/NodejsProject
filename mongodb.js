const {MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const db='Tmdb';
const client =new MongoClient(url);

async function dbConnect(){
    let response= await client.connect();
    let dbx = response.db(db);
    return dbx.collection('Tmcol');
    // let result = await collection.find({}).toArray();
    // console.log(result);
}
module.exports=dbConnect;