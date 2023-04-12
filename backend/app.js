const express = require("express");
const morgan = require("morgan");
const server = express();

const TopicRouter = require("./Routes/TopicRouter")
const AuthorRouter = require("./Routes/AuthorRouter")
const AuthenticationRouter = require("./Routes/AuthenticationRouter")

server.listen(8000,()=>{
    //console.log(server)
    console.log("server is listening on 8000");
})

server.use(morgan("tiny"))


server.use(AuthenticationRouter)
server.use(TopicRouter)
server.use(AuthorRouter)

server.use((req,res)=>{	                //not found middleware
	res.status(404).json({message:"page not found"})
})

server.use((error,req,res,next)=>{      //error middleware
    res.status(500).json({message:"exception"+error})
})

