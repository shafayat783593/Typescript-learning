

class BankAccount {
   readonly userId:number;
   public userName:string;
   protected userBalance:number
    constructor(userId:number,userName:string ,userBlance:number){
        this.userName=userName
        this.userBalance=userBlance
        this.userId=userId
    }

    // balance set kori
    // addBalance(blance:number){
    //    this.userBalance =this.userBalance + blance
    // }



    // setter user kori korbo

set addBalance(amount:number){
    this.userBalance= this.userBalance+this.userBalance   // it automaticly return 


}

    // get kora

    // getBalance(){
    //     return this.userBalance
    // }


    // getter use kori get korbo

    get getBalance(){
        return this.userBalance
    }
}


const shafayatAccount = new BankAccount(12,"shafayat",200)


//  call function with set and get ............................
// shafayatAccount.addBalance(100)      

// console.log(shafayatAccount.getBalance())


// setter.............................................
shafayatAccount.addBalance =100
console.log(shafayatAccount)

// get ......

console.log(shafayatAccount.getBalance)
