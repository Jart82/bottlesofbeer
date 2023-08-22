var bottle = 99;

while (bottle >= 0){
    if(bottle === 1){
        console.log(bottle + " bottles of beer on the wall. " + bottle + " bottles of beer");
        console.log("Take one down and pass it around, no more bottles of beer on the wall");
    } else if (bottle === 0){
        console.log("No more bottles of beer on the wall.");
        console.log("Go to the store and buy some more 99 bottles of beer on the wall.");
    } else{
        console.log(bottle + " bottles of beer on the wall. " + bottle + " bottles of beer");
        console.log("Take one down and pass it around, " + (bottle - 1) + " bottle of beer on the wall");
    }
    bottle--;
}