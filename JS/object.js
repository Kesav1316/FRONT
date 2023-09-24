//Behaves like a dictionary 

const cart  = {
    laptopId: 1,
    RAMSize: "8GB",
    storageSize: "256GB" 
}

console.log(cart.laptopId); //object.key displays the value paired with that key 

//Object.assign(cart, {laptopId: 2,RAMSize: "8GB"}) To assign the value

//cart.laptopId = 2; To replace existing
//cart["RAMSize"] = "2TB"; To replace existing

const cart2  = {
    laptopId: [], // Initialiing as empty array
    RAMSize: [],
    storageSize: [] 
}

cart2.laptopId.push(2); //Appends a new value to the cart inside array of key 
cart2.RAMSize.push("8GB"); 

//To push as a seperate object

const cart4  = []  //Created as array


//cart4.push(<object>>)

cart4.push({
    laptopId: 2,
    RAM: "8GB",
    storage: "256GB"
});
console.log(cart4); //To print the array
console.log(cart4[0]); //To print the first element in array
console.log(cart4[0].laptopId); //To print the value of key in first element in array 