import express from "express";
import connectDB from "./db.js";
import Fooditems from "./userModel.js";
const app = express();
connectDB();
app.use(express.json());

const fooditems =[{
        name: "pizza",
        description: "Hot beef steak with fry",
        price:320,
        flavour:"Golden delight",

    },
    {
        name: "pizza",
        description: "Hot beef steak with fry",
        price:320,
        flavour:"pepper barbecue",
    },
    {
        name: "Burger",
        description: "Hot beef steak with fry",
        price:320,
        flavour:"Butter chicken",
    },
    {
        name: "Burger",
        description: "Hot beef steak with fry",
        price:320,
        flavour:"Aloo tikki",
    }
];
//all data
app.get("/api/fooditems",(req,res) => {
    try {
        res.status(200).send(fooditems);
      }
       catch (error) 
      {
        res.json({ message:"unable to created"});
      }
});
//specific data
app.get("/api/fooditems/:id",(req,res)=>{
  console.log("PARAMS",req.params);
  try{
    const individualFood=fooditems.find((f)=>{
      return f.fid===Number(req.params.id);
    });
    if(individualFood){
      res.json(individualFood);
    }else{
      res.status(404).json({message:"Not found"});
      }
    }
  catch(error) {
    res.json({message:505});
  }
})
//post method:
app.post("/api/fooditems",async(req,res)=>{
  try{
    const inputfood={
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      flavour:req.body.flavour
    };
    console.log(inputfood);
    const menu=new Fooditems(inputfood);
    //  const newFooditems=new Fooditems({
    //   name,
    //   description,
    //   price,
    //   flavour,
    // });
    // res.json({
    //   message:"working successfully",
    // });
    const fooditemsCreated=await menu.save();
    if(fooditemsCreated){
      console.log("Created");
      res.status(201).json({message:"food is available"});
  }else
  {
      res.status(401);
      throw new Error("not available");
  }
} catch (err){
        return res.status(500).json({message: err.message});
      }});

//update
app.put("/api/fooditems/:id",(req,res)=>{
Fooditems.findByIdAndUpdate({_id:req.params.id},{
  $set:{
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    flavour:req.body.flavour
  }
})
.then(result=>{
  res.status(200).json({
    updated_fooditems:result
  })
})
.catch(err=>{
  console.log(err)
  res.status(500).json({
    error:err
  })
})

});

//delete method

app.delete("/api/fooditems",(req,res)=>{
  Fooditems.deleteMany({fooditems},(err,result)=>{
    if(err) throw err
    res.send(fooditems)
  })
})
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});