const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    authorId:{type:mongoose.Schema.Types.ObjectId,ref:"Authors",required:true}
})

mongoose.model("AuthorCredentials",schema)