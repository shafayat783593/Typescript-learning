// oop -class -object oriented programming

// class Animal {
// name:string
// species:string
// sound:string

// constructor(name:string,species:string,sound:string){
//     this.name= name
//     this.species=species
//     this.sound=sound

// }

// makeSound(){
//     console.log(`${this.name} making sound :${this.sound}`)
// }
// }





// Patammetter properties

class Animal {


constructor( public name:string, public species:string, public sound:string){

}
makeSound(){
    console.log(`${this.name} making sound :${this.sound}`)
}
}

const dog = new Animal(" dogesh","dog","Ghew Ghew")


const cat = new Animal("catesh","cat","mewa mewa")

dog.makeSound()





