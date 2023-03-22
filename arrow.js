const products= [{
    name:"Idly",
    price:20
},{
    name:"Dosa",
    price:30
},{
    name:"Noodles",
    price:40
},{
    name:"Rice",
    price:50
}];
const a = products.map((p) =>{
   return p.name,p.price
   
    if(p.price<30)
    {
        return(p)
}
else
{
    return("not found",p)
}
})
console.log("Mapped products",a);
