const mongoose=require("mongoose");
const MongoUrl="mongodb+srv://shekhar:12345@cluster0.0ht1zgg.mongodb.net/mock11?retryWrites=true&w=majority";
const connection=mongoose.connect(MongoUrl)
module.exports=connection