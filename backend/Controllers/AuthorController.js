exports.getAllAuthors = function(req,res,next){
    res.status(200).json({message:"list of Authors"})
}



exports.editAuthor = (req,res,next)=>{
    res.status(200).json({message:"editAuthor"})
}

exports.getAuthor = (req,res,next)=>{
    res.status(200).json({message:"getAuthor"})
}

exports.deleteAuthor = (req,res,next)=>{
    res.status(200).json({message:"deleteAuthor"})
}