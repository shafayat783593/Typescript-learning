// ? ternary opearator :desisio making
// ?? : nullish coalescing operator
// ? .optional chaning

const userAge = 21

const eligible = (age:number)=>{

    // if(age  >=21){
    //     console.log("You are eligiable")
    // }else{
    //     console.log("You are not eligible")
    // }

    const result = age>=21? "You are eligible":"You are not eligible "

    console.log(result)
}


eligible(40)




// ?? : nullish coalescing operator ..... it work on undifined and null value


// const userTheme = null
const userTheme = undefined

const seletedTheme = userTheme ??  "Light theme"
console.log(seletedTheme)

// ...defferent on nullis and ternary operator.................
const isAuthenticated = ''
const resultwithTernary = isAuthenticated ? isAuthenticated : "You are guest"

const resultwithNulish = isAuthenticated ?? "You are guest"

console.log({
resultwithTernary,
},{ resultwithNulish})


// optional chaning

 type User= {
    address:{
        city:string,
        town:string,
        postalCode?:number
    }
 }



const userdata:User = {
    address:{
        city:"dahak",
        town:"chattogram",

    

    }
}

const postlCode = userdata?.address?.postalCode
console.log(postlCode)