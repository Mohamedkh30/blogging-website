const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    subject:{type:String,required:true},
    content:{type:String,required:true},
    img:{type:String,required:true},
    authorId:{type:mongoose.Schema.Types.ObjectId,ref:"Authors",required:true},
    tags:[{type:String}],
    date:Date,
    viewcount:Number
})

mongoose.model("Topics",schema)