const mongoose= require("mongoose")
require("./../modules/AuthorCredentialsModules")
const AuthorCredentialsSchema = mongoose.model("AuthorCredentials")
const AuthorsSchema = mongoose.model("Authors")

exports.login = (req,res,next)=>{
    res.status(200).json({message:"login"})
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
            let cred = new AuthorCredentialsSchema({
                email:req.body.email,
                password:req.body.password,
                authorId:data._id
            })

            return cred.save()
        })
        .then(()=>{
            res.status(201).json({message:"Author created"})
        })
        .catch(error=>next(error))
    
}