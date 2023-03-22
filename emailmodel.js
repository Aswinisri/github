import mongoose from "mongoose";
const mailidSchema= mongoose.Schema({
        mailid:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,

        }
}
    
)
const Mail = mongoose.model("Mail",mailidSchema);
export default Mail;