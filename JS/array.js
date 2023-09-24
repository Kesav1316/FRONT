var l = [1,2,3,4,5,6];

function main() {
    console.log("Taking the index value and iterating using l[i]");
    for (var i in l) {  //i in l becomes index value and l[i] displays the array value in index i
    
        console.log(l[i]); 
    }
}

function main1() {
    console.log("Taking the value of array and iterating using i ")
    for (var i of l) {  //i of l becomes the array value 
        console.log(i);
    }
}

main();
main1();
