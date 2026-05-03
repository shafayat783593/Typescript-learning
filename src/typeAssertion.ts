let anything :any;

anything= "shafayat";


const kgToGramConvater = (input:number |string ):string|number|undefined=>{
if(typeof input === "number" ){
    return input*1000;
}else if (typeof input === "string"){
    const [value]=input.split(" ")

    return `Concvated output is ${Number(value)*1000}`
}
}

const result1 = kgToGramConvater(3) as number
const result2 = kgToGramConvater("2 kg") as string



console.log(result1)
console.log(result2)


type CustomError = {
    massage:string;
}

try {
    
} catch (error) {
    console.log((error as CustomError).massage )
}