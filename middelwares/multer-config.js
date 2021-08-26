const multer = require('multer')
const MIME_TYPES={
    'image/jpg' : 'jpg' ,
    'image/png' : 'png' , 
    'image/jpeg' : 'jpeg' 

}

const storage =     multer.diskStorage({
    destination : (req, file , cb)=>{
        cb(null , 'imagesFolder')
    } , 
    __filename: (req , file ,cb )=>{
        const name = file.originalname.split(' ').join('_');
        const fileExt = file.MIME_TYPES[file.mimetype]
        cb(null, name+Date.now()+'.'+fileExt  )

    }

})
module.exports= multer({storage: storage}).single('image')