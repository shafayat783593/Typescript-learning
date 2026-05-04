"use strict";
// generic Function
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayWithString = (value:string)=>[value]
// const creatArrayWithNumber= (value:number)=>[value]
// const creatArrayWithUserObj= (value:{id:number,name:string})=>{
//     return[ value]
// }
// const arrString= createArrayWithString("Apple")
// const arraNum= creatArrayWithNumber(343)
// const arrObj = creatArrayWithUserObj({
//     id:3334,
//     name:"Next Level"
// })
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrayWithGeneric("Apple");
const arraNum = createArrayWithGeneric(343);
const arrObj = createArrayWithGeneric({
    id: 3334,
    name: "Next Level"
});
// tuple
const createArrayWithTuple = (param1, param2) => [
    param1,
    param2
];
const creatArraywithTupleGenetac = (param1, param2) => [param1, param2];
const res1 = creatArraywithTupleGenetac("Shafayat", false);
const res2 = creatArraywithTupleGenetac(false, 4343);
// ....................................................................
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next Lavel",
        ...studentInfo
    };
};
const student1 = {
    id: 3334,
    name: "shafayat",
    hasPen: true,
};
const student2 = {
    id: 33,
    name: "korim",
    hasCar: true,
    isMarried: true,
};
const result = addStudentToCourse(student2);
console.log(result);
//# sourceMappingURL=GenericsWithFunction.js.map