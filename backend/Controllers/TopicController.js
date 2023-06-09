const mongoose= require("mongoose")
require("./../modules/TopicsModules")
require("./../modules/AuthorsModules")

const TopicsSchema = mongoose.model("Topics")
const AuthorsSchema = mongoose.model("Authors")

exports.getAllTopics = function(req,res,next){
    TopicsSchema.find({})
        .then((data)=>{
            res.status(200).json(data)
        })
}

exports.addTopic = (req,res,next)=>{
    let obj = new TopicsSchema({
        subject:req.body.subject,
        content:req.body.content,
        img:req.body.img,
        authorId:req.body.authorId,
        tags:req.body.tags,
        date:new Date(),
        viewcount:0
    })
    obj.save()
        .then((data)=>{
            return AuthorsSchema.findByIdAndUpdate({_id:req.body.authorId},{$push:{topicList:data._id}})
        })
        .then(data=>res.status(201).json(data))
        .catch(error=>{next(error)})
}

exports.getTopic = (req,res,next)=>{
    TopicsSchema.findOneAndUpdate({_id:req.params.id},{$inc:{viewcount:1}})
        .then((data)=>{
            if(data == null){
                throw new Error("topic not found")
            }else{
                res.status(200).json(data)
            }
        })
        .catch(error=>{next(error)})
}

exports.deleteTopic = (req,res,next)=>{
    TopicsSchema.findOne({_id:req.params.id})
    .then(topic=>{
        if(topic==null){
            throw new Error("topic not found")
        }
        return AuthorsSchema.findByIdAndUpdate({_id:topic.authorId},{$pull:{topicList:req.params.id}})
    })
    .then(data=>{
        return TopicsSchema.deleteOne({_id:req.params.id})
    })
    .then(()=>res.status(200).json({data:"deleted"}))
    .catch(error=>{next(error)});
}