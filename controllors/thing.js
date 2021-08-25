const Thing = require('../model/ThingSchema')



exports.postThing=async(req, res ) => {
    try{
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
     await Thing.findOneAndDelete({_id:id})
    res.status(200).json({msg:'Deleted!'})
  }




  exports.putThing= (req, res, next) => {
    const thing = new Thing({
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
    });
    Thing.updateOne({_id: req.params.id}, thing).then(
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