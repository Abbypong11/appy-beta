// alert('we are Beta!!!');
console.log('we are Beta!!!');

var firstName = 'Abigail';
var age = 10

let lastName = 'Oppong';
const boilingwaterTemperature = 100;

var firstName = 'Gail';
// let lastName = 'Amerley'; 
// const boilingwaterTemperature = 120; 

let wannaEat = true;

let bottle = {
    color: 'blue',
    volume: 500,
    canStoreWater: true,
    storeWater: null
}
console.log(firstName, age, lastName,  boilingwaterTemperature);

// Conditional Statements (If/Else)
if(age >= 18) {
    console.log('You are eligible.');
}
else{
    console.log('wait till you are eighteen.');
}
// Loops (For)
for(let i = 1; i != 8; i++) {
console.log('I am at index:', i);
}

// Functions - Defining
function isEligible(){
    if(age >= 18) {
        return('You are eligible.');
    }
    else{
        return('wait till you are eighteen.');
    }
}

// Function - Invoking
isEligible()


