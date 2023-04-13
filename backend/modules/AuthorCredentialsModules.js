const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    email:{type:String,unique:true},
    password:String,
    authorId:{type:mongoose.Schema.Types.ObjectId,ref:"Authors"}
})

mongoose.model("AuthorCredentials",schema)