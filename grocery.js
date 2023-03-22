import express from "express";
import connectDB from "./grocerydb.js";
import Grocery from "./grocerymodel.js";
connectDB();
const app = express();
app.use(express.json());
const grocery=[
    {
    fooditem:"Rice",
    description :"Tasty rice",
    brand :[{
       name:"Bamboo rice",
       quantity:"25kg",
       price:1500

    },{
        name:"ponni rice",
        quantity:"25kg",
        price:1800
    }]
},{
    fooditem:"provisions",
    description :"pure product",
    brand :[{
       name:"turmeric powder",
       quantity:"500gm",
       price:30

    },{
        name:"sugar",
        quantity:"1kg",
       price:20
    }]
}]
Grocery
app.get("/api/grocery",(req,res) => {
    try {
        res.status(200).send(grocery);
      }
       catch (error) 
      {
        res.json({ message:"unable to created"});
      }
});
app.post("/api/grocery/create",async(req,res)=>{
  try{
    const grocery={
    
      fooditem:req.body.fooditem,
      description :req.body.description,
      brand:req.body.brand
    }  
   
  console.log(grocery);
  const provisions=new Grocery(grocery);
  const groceryCreated=await provisions.save();
  if(groceryCreated){
    console.log("Created");
    res.status(201).json({message:"grocery is available"});
}else
{
    res.status(401);
    throw new Error("not available");
}
} catch (err){
      return res.status(500).json({message: err.message});
    }});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});