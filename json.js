const { copyFileSync } = require('fs');
const { resolve } = require('path');
const readline = require('readline');


const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var stCount = 6;
// Rough populations are in millions
CO = {"name": "Colorado", "capital": "Denver", "population": 5.7};
CA = {"name": "California", "capital": "Sacramento", "population": 39.5};
NY = {"name": "New York", "capital": "New York City", "population": 19.5};
VA = {"name": "Virginia", "capital": "Richmond", "population": 8.5};
TX = {"name": "Texas", "capital": "Houston", "population": 28.4};
FL = {"name": "Florida", "capital": "Tallahassee", "population": 21.2};

const lib = [CO, CA, NY, VA, TX, FL];

console.log("These are the states currently in the library: ");
printLibNames();

input.question('Which state would you like to retrieve from the library? (Enter full state name): ', (str) => {
    getState(str);
    input.question('Enter 0 for the state with the largest population and 1 for the smallest: ', (x) => {
        if(x == 0){
            getLargePop();
        }else if(x == 1){
            getSmallPop();
        }else{
            console.log("Incorrect Input");
        }
        input.question('Would you like to print the whole library? (y/n): ', (input) => {
            if(input == 'y'){
                printLib();
            }else if(input == 'n'){
                console.log("Have a nice day!")
            }else{
                console.log("Incorrect Input, we only print the library or nice messages for the correct inputs. (Get Lost)");
            }
            
        });
    });
    
});

input.question('Which state would you like to add to the library? (Enter capitalized state abreviation): ', (addSt) => {
    //addState(addSt);
    console.log("Mark 1");
});

function printLib(){
    for( let i = 0; i < stCount; i++){
        console.log(lib[i]);
    }
}

function printLibNames(){
    for( let i = 0; i < stCount; i++){
        console.log(lib[i].name);
    }
}

function getState(state){
    for( let i = 0; i < stCount; i++){
        var x = lib[i].name;
        if(x === state){
            console.log(lib[i]);
        }
    }
}

function getLargePop(){
    bigPop = 39.5;
    for( let i = 0; i < stCount; i++){
        if(lib[i].population == bigPop){
            console.log(lib[i]);
        }
    }
}

function getSmallPop(){
    smallPop = 5.7;
    for( let i = 0; i < stCount; i++){
        if(lib[i].population == smallPop){
            console.log(lib[i]);
        }
    }
}