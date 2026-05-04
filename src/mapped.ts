// mapped types


const arrayOfNum  : number[] = [1,2,3,4,5];


const arrayOfString: string[]= ["1", "2", "4"]


const arrayOfStringUsingMap  : string[] = arrayOfNum.map((num)=>num.toString())

console.log(arrayOfStringUsingMap)


const user= {
    id:443
}
user["id"]

type AreaOfNum = {
    height:number;
    width:number;

}


type height = AreaOfNum["height"]

// type AreaOfString = {
//     height:string;
//     width:string
// }



type AreaOfString = {
    [key in "height" | "width"]: string 
}

type AreaOfBooling = {
    [key in keyof  AreaOfNum]: boolean 
}




type Area <T> = {
    [key in keyof T]: T[key]

    // key >> height  >> string
    // key >> width   >>> number
}
//  T >>> {height:string;width:string}

//  {height:string;width:string}  T["width"]: number


const area1 : Area<{height:string;width:number}>  = {
    height:"34",
    width:4324
}





