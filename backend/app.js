const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const server = express();

const TopicRouter = require("./Routes/TopicRouter")
const AuthorRouter = require("./Routes/AuthorRouter")
const AuthenticationRouter = require("./Routes/AuthenticationRouter");
const AuthMW = require("./middlewares/AuthMW")

mongoose.connect("mongodb://127.0.0.1:27017/BlogDB")
    .then(()=>{
        console.log("connected to DB")
        server.listen(8000,()=>{
            console.log("server is listening on 8000");
        })
    })
    .catch(error=>{
        console.log("DB problem "+error);
    })

server.use(express.json())
server.use(morgan("tiny"))


server.use(AuthenticationRouter)
server.use(AuthMW)
server.use(TopicRouter)
server.use(AuthorRouter)

server.use((req,res)=>{	                //not found middleware
	res.status(404).json({message:"page not found"})
})

server.use((error,req,res,next)=>{      //error middleware
    res.status(500).json({message:"exception"+error})
})

