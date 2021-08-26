const express = require('express')
const router = express.Router()
const Thing = require('../model/ThingSchema')
const ControlThing=require('../controllors/thing')
const auth = require('../middelwares/auth')
const multer = require('../middelwares/multer-config')


   //save somtheing to DB
router.post('/',auth , multer, ControlThing.postThing)
      // retreive data from database 
router.get('/',auth ,  ControlThing.getThings)
   // retrieve sêcific data
router.get('/:id' ,auth ,ControlThing.getOneThing)
   // delete speceific thing
router.delete('/:id'  ,  ControlThing.deleteThing,)   
    //update one thing 
router.put('/:id', auth ,multer , ControlThing.putThing);


module.exports=router