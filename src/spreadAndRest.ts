// // spread operator
const friend = [ "John", "Jane", "Doe" ];
const schoolFriends= [ "Alice", "Bob", "Charlie" ];
const collegeFriends= ["MR.smarty", "MR.knowitall", "MR.genious" ];

friend.push(...schoolFriends);
friend.push(...schoolFriends);
friend.push(...collegeFriends);
console.log(friend);


// object spread operator
const user = {
    name:"shafayat",
    phone:"018904443",

    
}

const otherInfo= {
    hobby:"cricket",
    favoritedclor:"green"
}

const userInfo= {...user, ...otherInfo}

console.log(userInfo)





// rest operator

const sendInvite = (...friends:string[])=>{
    friends.forEach((friend:string)=>console.log(`Send invitation to ${friend}`) )
 

}
sendInvite("John","Jane","Alice","bob")



