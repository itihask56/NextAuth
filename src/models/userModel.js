import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter your name"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Enter your email"],
        unique:true,

    },
    password:{
        type:String,
        required:[true, "Enter password"]
    },
    isVerified:{
        type:Boolean,
        default:false,

    },
    isAdmin:{
        type:Boolean,
        default:false,
    } 

})
const User = mongoose.models.users || mongoose.model
("users",userSchema);

export default User