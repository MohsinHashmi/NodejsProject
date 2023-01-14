const mongoos=require('mongoose');
const Productscheme=new mongoos.Schema({
    Email:String,
    Password:String,
    // username:String,
    // password:String,
    // application:Number,
    // address:String,
    // title:String,
    // remarks:String
})
module.exports=mongoos.model('test_col',Productscheme);
