const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name:String,
    about:String,
    img:String,
    topicList:[{type:mongoose.Schema.Types.ObjectId,ref:"Topics"}]
})

mongoose.model("Authors",schema)