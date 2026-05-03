

interface Developer <T, X=null>{
    name :string;
    salary:number;
    device:{
        modle:string;
        brand:string;
        releasedYear:string;
    }
    smartWatch:T
    bike?:X
}



interface withoutBrand{
    heartRate:string;
    stopwatch:boolean;
}




// user ...
const poorDeveloper:Developer<withoutBrand,{
    brand:"honda",
    engineCapacity:"2cc"
} > = {
    name:"Korim",
    salary:20,
    device:{
        modle:"ASUS",
        brand:"X515",
        releasedYear:"2021"

    },
    smartWatch:{
        heartRate:"3000",
        stopwatch:true
    }
    
}

interface AppleWatch{
   heartRate:string;
    callSupport:boolean;
    calculator:boolean;
    AiFeature:boolean
}


// user....

const rechDeveloper:Developer< AppleWatch> = {
    name:"Korim",
    salary:100,
    device:{
        modle:"HP",
        brand:"X33",
        releasedYear:"2024"

    },
    smartWatch:{
        heartRate:"3000",
        callSupport:true,
        calculator:true,
        AiFeature:false


    },
    bike:null
    
}


