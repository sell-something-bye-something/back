const User = require('../model/UserSchema')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')


exports.signUp=(req , res)=>  {
    bcrypt.hash(req.body.password , 10 ).then((hash)=>{
        user = new User({
            email : req.body.email , 
            password : hash
        })
        user.save().then(()=>{
            res.status(201).json({
                msg : 'user created'
            })
        })
    }).catch((err)=>{
        res.status(500).json({
            error : err
        })

    })

}

exports.signIn=(req,res)=>{
    User.findOne({email : req.body.email}).then((user)=>{
        if (!user) {
           return res.status(401).json({
                msg : 'you dont have an account'
            })
        }
       bcrypt.compare(req.body.password , user.password).then((valid)=>{
           if (!valid) {
            return res.status(401).json({
                msg : 'your password is, wrong '
            }) 
           }
           const token = jwt.sign( 
                {userid : user._id},
                'RANDOM_TOKEN_SECRET' , 
                {expiresIn:'24h'}
                )
                console.log(token);
        res.status(200).json({
            
            userid: user._id ,
            token : token })   

       }).catch((err)=>{
           res.json({error : err})
       })
        

    })

}
exports.logOut=()=>{

}