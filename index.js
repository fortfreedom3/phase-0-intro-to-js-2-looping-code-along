//Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     debugger;
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }


// const names = ["teddy bear", "drone", "doll"];

function writeCards(names, event){
    let cardArray = [];
    for (let i = 0; i < names.length; i++) {
        cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardArray;
}

writeCards(names, 'bday');

function countDown(integer) {
    let count = integer;
    while (count >=0) {
        console.log(count--);
        debugger;
    }
}

countDown(3);















// function writeCards(strArray, event) {
//     let newArray = [];
//     for (let i = 0; i < strArray.length; i++) {
//         newArray.push(`Thank you, ${strArray[i]}, for the wonderful ${event} gift!`);
//     }
//     return newArray;
// }

// function countDown(integer) {
//     let counter = integer;
//     while (counter >= 0) {
//         console.log(counter);
//         counter--;
//     } 
// }


