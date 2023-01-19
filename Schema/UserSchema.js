let mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    email:{ type : String , unique : true, required : true },
    password:{type:String,required:true}
})

const UserSignUp=mongoose.model("mock11",UserSchema)


module.exports=UserSignUp