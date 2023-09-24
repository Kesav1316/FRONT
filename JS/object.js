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

cart2.laptopId.push(2); //Appends a new value to the cart with same key 
cart2.RAMSize.push("8GB"); //Appends a new value to the cart

console.log(cart2);