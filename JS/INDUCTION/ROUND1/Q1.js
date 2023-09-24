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



function display() { //To display the contents inside Laptops array
    for (var i of Laptops) {
        console.log(i);
    }

}

function addToCart(laptopId, RAMSize, storageSize) {
        cart.push({
            laptopId: laptopId,
            RAM: RAMSize,
            storage: storageSize
        })
    console.log(`The configuration with laptopId = ${laptopId} is saved.\nThe items in cart: `); //Use backquotes to use format
    for (let i of cart) {
        console.log(i);
    }
}

function removeFromCart(laptopId) {
    for (let i in cart) {
        if (cart[i].laptopId == laptopId) {
            cart.splice(i,1); //Deleting element of array in index 
            console.log(`The configuration with laptopId = ${i} was removed.Your current cart is: `);

            if (cart.length !=0) {
                for (let j of cart) {
                    console.log(j);
                }
            }
            else {
                console.log("Cart is empty");
            }

        }
        else {
            console.log(`Configuration with laptopId = ${i} is not found`);
        }
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

const totalPrice = calculateTotal(cart, Laptops);
console.log("Total Price:", totalPrice);

addToCart(1 , "16GB" , "512GB");
calculateTotal(cart, Laptops);