const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{type:String,required:true, unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    isDeleted:{type:Boolean,default:false},
    phoneNumber:[{type:Number}],
    age:{type:Number},
    // rolr:{type:mongoose.Schema.Types.ObjectId,ref:"Role",
    //  default: "we copy the id from the role we created in the role schema",}
});

 module.exports= mongoose.model("User",userSchema)
