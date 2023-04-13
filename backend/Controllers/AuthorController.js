const mongoose= require("mongoose")
require("./../modules/AuthorsModules")

const AuthorsSchema = mongoose.model("Authors")

exports.getAllAuthors = function(req,res,next){
    AuthorsSchema.find({})
        .then((data)=>{
            res.status(200).json(data)
        })
}

exports.updateAuthor = (req,res,next)=>{
    AuthorsSchema.updateOne({_id:req.body._id},{$set:{
        name:req.body.name,
        about:req.body.about,
        img:req.body.img
    }})
    .then(data=>res.status(200).json({data:"updated"}))
    .catch(error=>{next(error)});
}

exports.getAuthor = (req,res,next)=>{
    AuthorsSchema.findOne({_id:req.params.id})
        .then((data)=>{
            if(data == null){
                throw new Error("Author not found")
            }else{
                res.status(200).json(data)
            }
        })
        .catch(error=>{next(error)})
}

exports.deleteAuthor = (req,res,next)=>{
    AuthorsSchema.findOne({_id:req.params.id})
    .then(author=>{
        if(author==null){
            throw new Error("author not found")
        }
        return AuthorsSchema.deleteOne({_id:req.params.id})
    })
    .then(data=>{res.status(200).json({data:"deleted"})})
    .catch(error=>{next(error)});
}