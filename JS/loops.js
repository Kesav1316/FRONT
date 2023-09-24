console.log("LOOPING")

//let - used only in local block and cannot be redeclared and do not work outside block
//var = used in global and works outside block
//const = read only and works outside block 

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

//DO LOOPING
function main2() {
    var i = 0;
    do {
        console.log(i);
        i++;
    }
    while (i<11);

}


main2();
