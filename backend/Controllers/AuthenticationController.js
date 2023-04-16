const mongoose= require("mongoose")
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("./../modules/AuthorCredentialsModules")
const AuthorCredentialsSchema = mongoose.model("AuthorCredentials")
const AuthorsSchema = mongoose.model("Authors")

exports.login = (req,res,next)=>{
    AuthorCredentialsSchema.findOne({email:req.body.email})
    .then(user=>{
        if(user==null)
            throw new Error("Username or password incorrect..")

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                next(err)
            } else if (result === true) {

                const token=jwt.sign({
                    id:user.authorId,
                    role:"Author"
                },"blog");        
                res.status(200).json({data:"OK",token})
            } else {
                next(new Error("Username or password incorrect.."))
            } 
        })
    })
    .catch(error=>next(error))
}


exports.addAuthor = (req,res,next)=>{
    let author = new AuthorsSchema({
        name:req.body.name,
        about:req.body.about,
        img:req.body.img,
        topicList:[]
    })
    author.save()
        .then(data=>{
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                cred = new AuthorCredentialsSchema({
                    email:req.body.email,
                    password:hash,
                    authorId:data._id
                })
                return cred.save()
            })
        })
        .then(()=>{
            res.status(201).json({message:"Author created"})
        })
        .catch(error=>next(error))
    
}

