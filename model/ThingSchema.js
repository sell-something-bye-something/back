const mongoose = require('mongoose')
const ThingSchema= mongoose.Schema({
    title : {type : String , required : true} , 
    description : {type : String , required : true} , 
    imageUrl : {type :  String , required:true} , 
    userId : {type : String , required : String} , 
    price : {type : Number , required: true}
})
module.exports=mongoose.model('thing' , ThingSchema)