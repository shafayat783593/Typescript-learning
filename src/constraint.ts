// constraint : strict rules deya


type Student= {
    id:number,
     name:string,
     class:number
    }


const addStudentToCourse =<T extends Student > (studentInfo:T)=>{
    return {
        course:"Next Lavel",
        ...studentInfo
    }
}

const student1 ={
id:3334,
name:"shafayat",
hasPen:true,
class:8

}

const student2={
    id:33,
    name:"korim",
    hasCar:true,
    isMarried:true,
    class:9

}

const student3 ={
    haswatch:true,
    id:34
}
const result1 = addStudentToCourse(student3)
const result2 = addStudentToCourse(student1)
