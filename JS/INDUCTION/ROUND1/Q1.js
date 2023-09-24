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



function display_menu() { //To display the contents inside Laptops array
    for (let i of Laptops) {
        console.log(i);
    }

}


function display_cart() {
    for (let i of cart) {
        console.log(i)
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
            cart.splice(index,1); //Deleting element of array in index 
            console.log(`The configuration in index $${i} was removed.Your current cart is: `);
            if (cart.length !=0) {
                display_cart();
            }
            else {
                console.log("Cart is empty");
            }

        }



function calculateTotal(cart, laptops) {
    let total = 0;

    for (const item of cart) {
        const laptop = laptops.find(l => l.id === item.laptopId);

        if (!laptop) {
            console.error(`Laptop with ID ${item.laptopId} not found`);
            continue;
        }

        const selectedRAM = laptop.RAM.find(ram => ram.size === item.RAM);
        const selectedStorage = laptop.STORAGE.find(storage => storage.size === item.storage);

        if (!selectedRAM || !selectedStorage) {
            console.error(`RAM or storage configuration not found for laptop with ID ${item.laptopId}`);
            continue;
        }

        total += laptop.baseprice + selectedRAM.price + selectedStorage.price;
    }

    console.log(`The total price is ${total}`);
}

/* function calculateTotal() {
    const cartTotals = dumbCart.reduce((cartTotal, currentValue) => {
        const dumbProduct = dumbProducts.find((dumbProduct) => {
          return currentValue.laptopID === dumbProduct.id;
        });
      
        if (dumbProduct) {
          const myRam = dumbProduct.RAM.find((objVal) => {
            return currentValue.ramSize === objVal.size;
          })?.price;
      
          const ramPrice = myRam || 0;
      
          const mySSD = dumbProduct.STORAGE.find((objVal) => {
            return currentValue.ramSize === objVal.size;
          })?.price;
      
          const ssdPrice = mySSD || 0;
      
          return cartTotal + ramPrice + ssdPrice;
        }
        return cartTotal;
      }, 0)
} */


while (true) {
    let x = prompt("Enter the operation: \n1)Add to cart \n2)Remove from cart \n3)Calculate \n4)Break ");
    if (x == "1") {
        display_cart()
        let id = prompt("Enter the laptop id:  ");
        let rams = prompt("Enter the size of ram: ");
        let storage = prompt("Enter the size of storage: ");
        let id1 = parseInt(id,10);
        addToCart(id1, rams, storage);                                      

    }

    else if (x == "2") {
        display_cart();
        let id = prompt("Enter the index to delete: ");
        let x = parseInt(id,10);
        removeFromCart(x);
        
    }


    else if (x == "3") {
        display_cart();
        calculateTotal(cart,Laptops);
    }

    else if (x == "4") {
        break;
    }

}