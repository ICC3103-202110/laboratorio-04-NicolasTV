var prompt = require('prompt-sync')();

function view(counter) {
    return counter;
}

function update(msg, counter) {
    let a = 1;
    if (msg == "+") {
        return (counter + a);
    }
    else if (msg == "-") {
        return (counter - a);
    }
    else {
        return counter;
    }
}

function app(counter) {
    while (true) {
        const currentView = view(counter);
        console.clear();
        console.log(`\nContador: ${currentView}`);
        const msg = prompt("\n(+)  (-)\n\n(q) to exit program\n\n");
        counter = update(msg, counter);
    }
}

app(0);
