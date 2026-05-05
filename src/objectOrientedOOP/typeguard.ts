  

//   type guard

// in typeof


type Alphanemeric = number |string

const add =(num1:Alphanemeric , num2:Alphanemeric)=>{


if(typeof num1 === "number" && typeof num2 === "number"){
    return num1+num2
}else {
    num1.toString()+num2.toString()
}
   
}

add(2,"2")


// in guard 


type NormalUser= {
    name:string;

}

type AdminUser={
    name:string;
    role:string;
}

const getUserInfo= (user:NormalUser |AdminUser)=>{
 if("role" in user ){
        console.log(`this ${user.name}and his role is :${user.role}`)

 }else{
    console.log(`This is ${user.name}`)
 }


}
getUserInfo({name:"Normal",role:"admin"})