const express = require('express')
const router = express.Router()
const Thing = require('../model/ThingSchema')
const ControlThing=require('../controllors/thing')
const auth = require('../middelwares/auth')



   //save somtheing to DB
router.post('/',auth , ControlThing.postThing)
      // retreive data from database 
router.get('/',auth ,  ControlThing.getThings)
   // retrieve sêcific data
router.get('/:id' ,auth ,ControlThing.getOneThing)
   // delete speceific thing
router.delete('/:id' , auth ,  ControlThing.deleteThing,)   
    //update one thing 
router.put('/:id', auth ,ControlThing.putThing);


module.exports=router