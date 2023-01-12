const { application } = require('express');
const express=require('express');
require('./config');
const model=require('./mongose_model');
const cors = require('cors');
const app=express();
// app.use(cors({origin: true, credentials: true}));
// app.use(cors());

app.use((req, resp, next) => {
  resp.header('Access-Control-Allow-Origin', '*');
  resp.header('Access-Control-Allow-Headers', '*');
  resp.header("Access-Control-Allow-Origin", "*");
  resp.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  resp.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.use(express.json());

// // Create your Node.js Application
// // Create a file to contain your application called index.js in your project directory. Add the following code, assigning the uri variable the value of your connection string.

// const { MongoClient } = require("mongodb");63bbe5cfc188a46d6f50dc32
// // Replace the uri string with your connection string.
// const uri =
// //   "mongodb+srv://<hh22>:<password>@<cluster-url>?retryWrites=true&w=majority";
//      "mongodb+srv://mh22:090078641@cluster0.9nglnih.mongodb.net/?retryWrites=true&w=majority"
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db('test_db');
//     const movies = database.collection('test_col');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// app.post("/ins",async (req,resp) =>{
//   let data = new model(req.body);
  
  
//   resp.send(result);
//   try {
//     let result= await data.save();
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
  
// });
  // req.header('Access-Control-Allow-Origin', '*');
  // req.header('Content-Type','application/json');
  // req.header('Access-Control-Allow-Origin', '*',);
  // req.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE, OPTIONS');
  // req.header( 'Access-Control-Allow-Headers','*');
    
app.get("/a",async (req,resp) =>{

  let data = await model.find();
  resp.send(data);
});

app.post("/crt",async (req,resp) =>{

  let data = new model(req.body);
  let result= await data.save();
  console.log(result);
  resp.send(result);
 
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

const PORT = 3456;
// app.listen(PORT);
app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});