exports.getAllTopics = function(req,res,next){
    res.status(200).json({message:"list of Topics"})
}

exports.addTopic = (req,res,next)=>{
    res.status(201).json({message:"addTopic"})
}

exports.getTopic = (req,res,next)=>{
    res.status(200).json({message:"getTopic"})
}

exports.deleteTopic = (req,res,next)=>{
    res.status(200).json({message:"deleteTopic"})
}