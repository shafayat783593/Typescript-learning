// Polymorphism :


class Person{
    getSleep(){
        console.log(`I am a Normal Happy person sleep for 8 hours`)

    }
}

class Students extends Person{
   getSleep() {
       console.log(`I am a student .I sleeparas`)
   }
}


class NextLeveldeveloper extends Person{
    getSleep() {
    console.log(`I am a Next Level developer . I sleep for 6 hour`)

   }
}

const getSleepingHours=(param:Person)=>{
    param.getSleep()
}

const person1 = new Person()
const person2 = new Students()
const person3 = new NextLeveldeveloper()


getSleepingHours(person2)



class Shape{
    getArea():number{
        return 0
    }
}

class Circle extends Shape{
    // area = pi*r*r
    redius :number;
    constructor(redius:number){
        super()
        this.redius = redius
    }
    getArea(): number {
        return Math.PI*this.redius*this.redius
        
    }
}


class Rectangle extends Shape{
height:number;
width:number

constructor(height:number,widht:number){
    super()
    this.height=height
    this.width=widht

}

    // are = height *width
    getArea(): number {
        return this.height*this.width
        
    }
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(20,10)



const getArea= (param:Shape)=>{
console.log(param.getArea()
)
}

getArea(shape1)