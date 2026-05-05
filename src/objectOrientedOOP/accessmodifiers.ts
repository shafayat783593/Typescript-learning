// access >> modify

class BankAccount {
   readonly userId:number;
   public userName:string;
   protected userBalance:number
    constructor(userId:number,userName:string ,userBalance:number){
        this.userName=userName
        this.userBalance=userBalance
        this.userId=userId
    }
    addBlance(balance:number){
this.userBalance =this.userBalance + balance
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
