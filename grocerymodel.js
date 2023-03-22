import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const grocerySchema=mongoose.Schema([{
    fooditem:{
            type:String,
            required:true,
        },
    
    description :{
        type:String,
        required:true,
    },
    brand :[{
       name:{
        type:String,
        required:true,
    },
       quantity:{
        type:String,  
        required:true,
    }, 
       price:{
        type:Number,
        required:true,
    },

    }]
}])
const Grocery=mongoose.model("Grocery",grocerySchema);
export default Grocery;