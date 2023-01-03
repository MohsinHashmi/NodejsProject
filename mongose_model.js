const mongoos=require('mongoose');
const Productscheme=new mongoos.Schema({
    application:Number,
    title:String
})
module.exports=mongoos.model('mcol',Productscheme);
