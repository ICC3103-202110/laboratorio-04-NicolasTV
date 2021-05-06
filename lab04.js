
let counter = 0;
const a = 1;
const ps = require("prompt-sync");
const prompt = ps();

function view(counter) {
    return counter;
}

function update(msg, counter) {
    let msg = prompt("\n(+)  (-)\n");
    if(msg = "+"){
        return (counter + a);
    }
    else if(msg = "-"){
        return (counter - a);
    }
    else{
        return counter;
    }
}