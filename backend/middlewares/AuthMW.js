const jwt=require("jsonwebtoken");

module.exports=(req,res,next)=>{
    //console.log(req.get("Authorization"))
    //search for the token
    //try{
        if(req.get("Authorization")!=undefined){
            
            const token= req.get("Authorization").split(" ")[1];
        
            const decodedToken = jwt.verify(token,"nursingSystem");
            req.decodedToken=decodedToken;
        }
        next();
    // }
    // catch(error)
    // {
    //     next(new Error("not Authenticated"));
    // }
}

module.exports.checkAuthor=(req,res,next)=>{
    console.log(req.decodedToken)
    if(req.decodedToken!=undefined){
        if(req.decodedToken.role=="Author")
            next()
        else
            next(new Error("Not Authorized"))
    }else{
        next(new Error("Not Authorized"))
    }
        
}

// console.log(exports)
// console.log(module.exports)