
// Parent person
class Person{

    name:string;
    age:number;
    address:string
    constructor(name:string,age:number,address:string){
        this.name= name
        this.age=age
        this.address=address
    }
    getSleep(numOfHours:number){
        console.log(`${this.name} ${numOfHours} You are good student`)
    }
}



//  student child property ..............................
class Stundent extends Person{
    role:number;
    constructor(name:string,age:number,address:string,role:number){
        super(name,role,address)
        this.role=role

    }
}

const stundent1=new Stundent('Shafayat',23,"Bangladesh",344)

stundent1.getSleep(15)



//  teacher ch8ld Poperty..................................

class Teacher  extends Person{
    designation:string    //extra property 
    constructor(name:string, age:number, address:string ,designation:string){
        super(name,age,address)
        this.designation=designation  //extra property 
    }

    takeClass(numberOfClass:number){
        console.log(`${this.name } ${numberOfClass}eatao gonta class nei`)
    }
}


const teacher1= new Teacher("korim",43,"chattogram","senior teacher")

teacher1.takeClass(34)
stundent1.getSleep(15)