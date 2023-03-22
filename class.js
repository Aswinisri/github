class Calculator {
    constructor (x,y,z){
        console.log("constructor is working")
        this.x = x
        this.y = y
        this.z = z
    }
    add(){
        console.log(this.x+this.y)
    }
    sub(){
        console.log(this.x-this.y)
    }
    addition(){
        console.log(this.x+this.y+this.z)
    }
    subraction(){
        console.log(this.x-this.y-this.z)
    }
    multiply(){
        console.log(this.x*this.y)
    }
    multiplication(){
        console.log(this.x*this.y*this.z)
    }
    div(){
        console.log(this.y/this.x)
    }
    mod(){
        console.log(this.y%this.x)
    }
    pow(){
        console.log(this.x**this.y)
    }
}
const calc1 =new Calculator(5,7)
calc1.add()
const calc2 =new Calculator(7,2)
calc2.sub()
const calc3 =new Calculator(6,4,2)
calc3.addition()
const calc4 =new Calculator(7,4,1)
calc4.subraction()
const calc5 =new Calculator(12,12)
calc5.multiply()
const calc6 =new Calculator(4,3,4)
calc6.multiplication()
const calc7 =new Calculator(4,8)
calc7.div()
const calc8 =new Calculator(5,10)
calc8.mod()
const calc9 =new Calculator(4,5)
calc9.pow()
