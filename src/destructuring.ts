// object destructuring
// array destructuring


const user ={
id:123,
    name:{
        firstName:"shafayat",
        middleName:"dd",
        lastName:"Hosan",

    },
    gender:"male",
    favouritecolor: "black"

}

// const myfavouriteColor = user.favouritecolor
// const mymiddleName= user.name.middleName

const {favouritecolor:myfavouritColor, name:{middleName:middle} }=user
console.log(myfavouritColor)
console.log(middle)



// array

const friends= ["Korim","rohim","shafayat"]
// const myBestFriend = friends[2]

// const [A,myBestFriend,C] = friends
const [, ,myBestFriend] = friends
console.log(myBestFriend)