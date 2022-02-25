class shape{
    
     draw=()=>{
         return "This is a generic shape"
     }
}

class Circle extends shape {
    constructor(){
        super()

    }
     
    draw=()=>{
        return "This is a circle shape"
    }

}

let circle = new Circle()
console.log(circle)