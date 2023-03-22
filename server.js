import express from "express";
import connectDB from "./db.js";
import UserDetails from "./servermodel.js";
connectDB();
const app=express();

const user=[
    {
        userid:"1813014",
        name:"devipriya",
        dob:"08/05/2001",
        profession:"back end developer"
    },
    {
        userid:"1813015",
        name:"priya",
        dob:"08/04/1999",
        profession:"front end developer"
    },
    {
        userid:"1813016",
        name:"aswini",
        dob:"07/04/2000",
        profession:"full stack developer"
    }
]
UserDetails
app.use(express.json());
app.get("/api/addUser",(req,res)=>{
    try{
        res.status(200).send(user);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
app.post("/api/addUser",async(req,res)=>{
    try{
        const details={
            userid:req.body.userid,
            name:req.body.name,
            dob:req.body.dob,
            profession:req.body.profession,
            
        };
        console.log(details);
        const user=new UserDetails(details);
const userCreated=await user.save();
if(userCreated){
    console.log("created");
res.status(201).json({message:"successfully created"});
}
else{
    res.status(401);
    throw new error("not found ");
}
}catch(err){
    return res.status(500).json({message:err.message});
}}
);
//update
app.put('/api/addUser/:id',(req,res)=>{
    console.log(req.params.id);
    UserDetails.findOneAndUpdate({_id:req.params.id},{
        $set:{
           
            userid:req.body.userid,
            name:req.body.name,
            dob:req.body.dob,
            profession:req.body.profession,
            
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_userDetails:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    //delete
    app.delete('/api/addUser/:id',(req,res)=>{
        console.log(req.params.id);
        UserDetails.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                userid:req.body.userid,
                name:req.body.name,
                dob:req.body.dob,
                profession:req.body.profession,
                
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_userDetails:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
    




const port=5000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});