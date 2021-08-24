const express = require('express')
const app =express()
const mongoose = require('mongoose')
const Thing = require('./model/ThingSchema')


// connect to database
DB_Url   ='mongodb+srv://saif:dellpc@cluster0.f0kca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(
  DB_Url, {useUnifiedTopology : true , useNewUrlParser : true})
  .then(()=>{
    console.log('database connected');
  }).catch(
    (err)=>{
      console.log(err ,   'cpnnection error');
    })











app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});






app.use(express.json())

// save to dataase 
app.post('/api/stuff', (req, res ) => {
const {title , description,imageUrl,userId,price}=req.body
// console.log(title, description , imageUrl , userId , price);
const thing = new Thing(
 { title,
   description ,
   imageUrl ,
   userId ,
   price,}
)
thing.save().then(()=>{
  res.status(201).json({msg : 'Post Created succefully'});
}).catch(
  (err)=>{
    res.status(400).json({
      error  : err
    })

})
    

// retreive data from database 
app.get('/api/stuff', async(req, res) => {
  // try{
    const thin = await Thing.find()
    res.json(thin)
    console.log('object');

  // }
  // catch(err){
  //   res.json({error : err })

  // }
  
});

    


});

module.exports=app