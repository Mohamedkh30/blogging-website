const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name:{type:String,required:true},
    about:{type:String,required:true},
    img:String,
    topicList:[{type:mongoose.Schema.Types.ObjectId,ref:"Topics"}]
})

mongoose.model("Authors",schema)