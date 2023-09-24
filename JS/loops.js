console.log("LOOPING")

//FOR LOOPING
function main() {
    for (var i = 0;i<11; i++) { // let - cannot be redeclared var - can be redeclared
        console.log(i); 
    }
    
}


main();

//WHILE LOOPING
function main1() {
    var j = 0; //The variable should be declared before using while loop
    while (j < 11) {
        console.log(j);
        j++;
    }
}


main1();