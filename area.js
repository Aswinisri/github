class Area{
    constructor(width,height,length){
      console.log("constructor is working")
          this.x = width
          this.y = height
          this.z = length
    }
    triangle(){
        const Area=(this.x+this.y+this.z)/2 ;
        console.log(`Area of Triangle is: ${Area}`);
  
    }
  
    rectangle(){
        const Area=(this.x*this.y);
        console.log(`Area of Rectangle is: ${Area}`);
    }
  
    square(){
     const Area=(2*(this.x*this.y+this.x*this.z+this.y*this.z));
    console.log(`Area of Square is: ${Area}`);
  }
  }
  const areas = new Area(5,10,15)
  areas.triangle()
  const areas1 = new Area(2,3)
  areas1.rectangle()
  const areas2 = new Area(4,1,2)
  areas2.square()