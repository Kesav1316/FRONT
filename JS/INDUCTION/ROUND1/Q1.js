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
        id: 1,
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
        id: 1,
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

function main() {
    for (var i of Laptops) {
        console.log(i);
    }

}


main();