const Thing = require('../model/ThingSchema')
const fs = require('fs')


exports.postThing=async(req, res ) => {
  req.body.thing = JSON.parse(req.body.thing )
  url = req.protocol +'://'+req.get('host')
    try{
      const {title , description,userId,price}=req.body.thing
      const imageUrl = url + '/images/'+req.file.filename
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
  })}
  catch(err){
      res.status(400).json({
        error  : err
      })
  
  }}
  exports.getThings=async(req, res) => {
    console.log(req.user);
    try{
      const thin = await Thing.find()
      res.json(thin)
      console.log('object');
  
    }
    catch(err){
      res.json({error : err })
  
    }
    
  };




  exports.deleteThing =  async(req,res)=>{
    const{id}=req.params
    Thing.findById(id).then(
      (thing)=>{
      const filename = thing.imageUrl.split('/images/')[1]
      fs.unlink('imagesFolder/'+filename , ()=>{
        console.log('doooo');
         Thing.findOneAndDelete({_id:id}).then(()=>{
             res.status(200).json({msg:'Deleted!'})
        })
      
      })

    })

   
  }




  exports.putThing= (req, res, next) => {
    let title , description , imageUrl , price  , userId
    let _id = req.params.id
    if (req.file){
      url = req.protocol +'://'+req?.get('host')
      req.body.thing= JSON.parse(req.body.thing) ; 
      ({title ,
        description,
        userId,
        price}=req.body.thing)
        imageUrl = url + '/images/'+req.file.filename
    }
    else{
     ({title ,
      imageUrl ,
      description,
      userId,price
      }=req.body)
      
    }
    const thing = new Thing({
      _id, 
      title : title,
      imageUrl,  
      description, 
      price,
      userId
    });
    
    Thing.updateOne({_id}, thing).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }


 exports.getOneThing =  async(req , res)=>{
    const {id}= req.params
    const thing = await Thing.findById(id)
    console.log(id);
    res.json(thing)  
  ;}