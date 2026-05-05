

// oop :instance of thpe guard

class Person {
    name:string;
    constructor(name:string){
        this.name= name;
    }
      getSleep(numOfhours:number){
        console.log(`${this.name} doick ${numOfhours} gonta sleep kori`)
    }
}


class Student extends Person{
    constructor(name:string){
        super(name)
    }

    doStudy(numOfhours:number){
        console.log(`${this.name} doick ${numOfhours} gonta sudy koe`)
    }
}



class Teacher extends Person{
    constructor(name:string){
        super(name)
    }
    takeClass(numOfhours:number){
        console.log(`${this.name} doick ${numOfhours} gonta class kori`)
    }
}
// function guard

const isStudent= (user:Person)=>{
    return user instanceof Student;  //true or fal

}

const isTeacher = (user:Person)=>{
    return user instanceof Teacher  ///user is teacher
}

const getUserInfo = (user:Person)=>{
    if(isStudent(user)){
        user.doStudy(10)

    }else if(isTeacher(user)){
        user.takeClass(5)
    }else{
        user.getSleep(8)
    }
}

const student1= new Student("Shafayat")

const teacher1 = new Teacher("Mr. Korim")

const person1 = new Person(" Mr. Rohim")

getUserInfo(teacher1)