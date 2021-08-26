const express = require('express')
const app =express()
const mongoose = require('mongoose')
const thingrouter = require('./routes/thingrouter')
const userrouter = require('./routes/userrouter')
const path = require('path')

// connect to database
DB_Url   ='mongodb+srv://saif:dellpc@cluster0.f0kca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(
  DB_Url, {useUnifiedTopology : true , useNewUrlParser : true,useFindAndModify: false})
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
app.use('/api/stuff' , thingrouter)
app.use('/api/auth' , userrouter)
app.use('/images' , express.static(path.join(__dirname , 'imagesFolder')))

// save to dataase 


module.exports=app