import mongoose from "mongoose";
const  userSchema=mongoose.Schema({
    userid:{
            type:String,
            required:true,
           
         },
    name:{
            type:String,
            required:true,
       },
    dob:{
       type:String,
       required:true,
    },
    profession:{
    type:String,
    required:true,
    }
})
         
const UserDetails=mongoose.model("UserDetails",userSchema);
export default UserDetails;
