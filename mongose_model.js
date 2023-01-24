const mongoos=require('mongoose');
const Productscheme=new mongoos.Schema({
    name:String,
    email:String,
    address:String,
    contact:String,
    password:String,
    cpassword:String,
    // title:String,    
    // remarks:String
})
module.exports=mongoos.model('test_col',Productscheme);
