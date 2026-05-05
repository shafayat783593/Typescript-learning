

    //    access modifier



    class Driver{
      public  name:string;
      private  nid:string;
       protected earning:number;
        constructor(name:string,nid:string,earnings:number){
            this.name= name
            this.nid=nid
            this.earning=earnings
        }
    }

    const diver1 = new Driver("Shafayat","nid018904454",25000)
    console.log(diver1.name)


    class ProDriver extends Driver{
        certifiedDriver(){
            console.log("He is a pro driver!!!")

        }
        constructor(){
            super("chulbul","334234234",25000)
            this.earning = 30000
        }
    }

const  nextGenDriver = new ProDriver()
nextGenDriver.certifiedDriver()




// ..............getter  setter ...............


class wallet{
    private _balance:number = 0;

    get balance(){
        return this._balance
    }

    set deposit(amount:number){
        if(amount>0){
            this._balance+= amount
        }
    }
}

const wall=new wallet()
wall.deposit=500
console.log("bank balance :",wall.balance)






// polimorphism

class SpecialVehicle{
    calculateFare(distance:number):number{
        return distance*10;
    }
}

class SpcialCar extends SpecialVehicle{
    calculateFare(distance: number): number {
        return distance*50
    }
}

class PathaoBike extends SpecialVehicle{
    calculateFare(distance: number): number {
        return distance*15
    }
}

const instance1 = new SpecialVehicle()
const instance2 = new SpcialCar()
const instance3 = new PathaoBike()

console.log(instance1.calculateFare(10))
console.log(instance2.calculateFare(20))
console.log(instance3.calculateFare(30))






abstract class Payment{
    abstract pay(amount:number):void
    
    printReceipt(){
        console.log("Payment done")
    }
}

class BkashPayment extends Payment{
    pay(amount: number): void {
        console.log(`paid ${amount} vai bkash`)
    }
}

const checkBkash = new BkashPayment()

checkBkash.pay(5000)


// encapsultion......

class Account{
    private _balance:number = 0;
    deposit(amount:number){
        amount>0 && this._balance +amount;
    }
    getBalance(){
        return this._balance
    }
}

const checkAcc= new Account()
checkAcc.deposit(34)
