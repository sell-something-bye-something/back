const mongoose= require('mongoose')
const uniquevalidator = require('mongoose-unique-validator')
const Userschema = new mongoose.Schema({
    email : {type : String , required : true , unique : true} , 
    password : {type: String ,required : true}
})
Userschema.plugin(uniquevalidator)
module.exports=mongoose.model('user' , Userschema)