exports.login = (req,res,next)=>{
    res.status(200).json({message:"login"})
}

exports.addAuthor = (req,res,next)=>{
    res.status(201).json({message:"addAuthor"})
}