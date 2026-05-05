// access >> modify

class BankAccount {
   readonly userId:number;
   public userName:string;
   protected userBlance:number
    constructor(userId:number,userName:string ,userBlance:number){
        this.userName=userName
        this.userBlance=userBlance
        this.userId=userId
    }
    addBlance(blance:number){
this.userBlance =this.userBlance + blance
    }
}

const shafayatAccount = new BankAccount(12,"shafayat",900)

class StudentBankAccount extends BankAccount{
    test(){
        this.addBlance
    }

}

shafayatAccount.addBlance(100)
console.log(shafayatAccount)
