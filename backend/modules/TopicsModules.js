const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    subject:String,
    content:String,
    img:String,
    authorId:{type:mongoose.Schema.Types.ObjectId,ref:"Authors"},
    tags:[{type:String}],
    date:Date,
    viewcount:Number
})

mongoose.model("Topics",schema)