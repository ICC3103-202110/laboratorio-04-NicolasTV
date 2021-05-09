var prompt = require('prompt-sync')();
var continueCounting = true;
let a = 1;

function view(counter) {
    return counter;
}

function update(msg, counter) {

    if (msg == "+") {
        return (counter + a);
    }
    else if (msg == "-") {
        return (counter - a);
    }
    else if (msg == "q") {
        return continueCounting = false;
    }
    else {
        return counter;
    }
}

function app(counter) {

    while (continueCounting) {
        console.clear();
        const currentView = view(counter);
        console.log(`\nCount: ${currentView}`);
        const msg = prompt("\n(+)  (-)\n\n(q) to exit program\n\n");
        counter = update(msg, counter);
    }
}

app(0);
