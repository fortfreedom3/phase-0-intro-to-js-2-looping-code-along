//Code your solutions in this file

function writeCards(strArray, event) {
    let newArray = [];
    for (let i = 0; i < strArray.length; i++) {
        newArray.push(`Thank you, ${strArray[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(integer) {
    let counter = integer;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    } 
}


