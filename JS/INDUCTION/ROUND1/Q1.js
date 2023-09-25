const cart = []
const Laptops = [
    {
        id: 1,
        name: "STANDARD",
        baseprice: 500,
        RAM: [
            {size: "8GB" , price: 50},
            {size: "16GB" , price: 100}
        ],
        STORAGE: [
            {type: "SSD" , size: "256GB" , price: 100},
            {type: "SSD" , size: "512GB" , price: 150}
        ]

    },

    {
        id: 2,
        name: "PRO",
        baseprice: 800,
        RAM: [
            {size: "16GB" , price: 100},
            {size: "32GB" , price: 200}
        ],
        STORAGE: [
            {type: "SSD" , size: "512GB" , price: 150},
            {type: "SSD" , size: "1TB" , price: 250}
        ]

    },

    {
        id: 3,
        name: "ULTRA",
        baseprice: 1000,
        RAM: [
            {size: "32GB" , price: 200},
            {size: "64GB" , price: 300}
        ],
        STORAGE: [
            {type: "SSD" , size: "1TB" , price: 250},
            {type: "SSD" , size: "2TB" , price: 400}
        ]

    },

]



//function display_menu() { //To display the contents inside Laptops array
//   for (let i of Laptops) {
//       console.log(i);
//    }

//}


function display_cart() {
    for (let i of cart) {
        console.log(`LAPTOPID: ${i.laptopId} \nRAM: ${i.RAM} \nSTORAGE: ${i.storage}`);
    }
}


function displayconfig() {
    for (let i of Laptops) {
        console.log(`LaptopID: ${i["id"]} \nLaptopname: ${i["name"]} \nBaseprice: ${i["baseprice"]}`);
        for (let j=0;j<2;j++) {
            console.log(`RAM: ${i["RAM"][j].size} - PRICE: ${i["RAM"][j].price}`);
        }
        for (let j = 0;j<2;j++) {
            console.log(`TYPE: ${i["STORAGE"][j].type} SIZE: ${i["STORAGE"][j].size} - PRICE: ${i["STORAGE"][j].price}`);
        }
    }
}


function addToCart(laptopId, RAMSize, storageSize) {
        cart.push({
            laptopId: laptopId,
            RAM: RAMSize,
            storage: storageSize
        })
        console.log(`The configuration with laptopId = ${laptopId} is saved.\nThe items in cart: `); //Use backquotes to use format
        display_cart();
}

function removeFromCart(index) {
    if (cart.length < index + 1) {
        console.log("The index is not found");
    }

    else {
        cart.splice(index,1); //Deleting element of array in index 
        console.log(`The configuration in index ${index} was removed.Your current cart is: `);
        if (cart.length !=0) {
            display_cart();
        }
        else {
            console.log("Cart is empty");
        }

    }

    }


    
function calculateTotal(cart, laptops) {
    let total = 0;
        
    for (const item of cart) {
        const laptop = laptops.find(l => l.id === item.laptopId);
        
        if (!laptop) {
                console.log(`Laptop with ID ${item.laptopId} not found`);
                continue;
            }
        
        const selectedRAM = laptop.RAM.find(ram => ram.size === item.RAM);
        const selectedStorage = laptop.STORAGE.find(storage => storage.size === item.storage);
        
        if (!selectedRAM) {
            console.log(`RAM or storage configuration not found`);
            continue;
        }

        else if (!selectedStorage) {
            console.log(`STORAGE configuration not found`);
            continue;
        }
        
        total += laptop.baseprice + selectedRAM.price + selectedStorage.price;
    }
        
    console.log(`The total price is ${total}`);
}


while (true) {
    let x = prompt("Enter the operation: \n1)Add to cart \n2)Remove from cart \n3)Calculate \n4)Break ");
    if (x === "1") {
        console.log("The list of configurations: ")
        displayconfig()
        let laptopid = prompt("Enter the laptop id:  ");
        let rams = prompt("Enter the size of ram: ");
        let storage = prompt("Enter the size of storage: ");
        let id1 = parseInt(laptopid,10);
        addToCart(id1, rams, storage);                                      

    }

    else if (x === "2") {
        display_cart();
        let id2 = prompt("Enter the index to delete: ");
        let x = parseInt(id2,10);
        removeFromCart(x);
        
    }


    else if (x === "3") {
        display_cart();
        calculateTotal(cart,Laptops);
    }

    else if (x === "4") {
        break;
    }

}