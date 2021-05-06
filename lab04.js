const ps = require("prompt-sync");
const prompt = ps();

function view(counter) {
    return counter;
}

function update(msg, counter) {
    const a = 1;
    if (msg = "+") {
        return (counter + a);
    }
    else if (msg = "-") {
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
        console.log(`\nContador: ${currentView}\n`);
        const msg = prompt("\n(+)  (-)\n");
        counter = update(msg, counter);
    }
}