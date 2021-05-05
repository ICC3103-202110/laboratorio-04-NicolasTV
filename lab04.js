let count = 0;
const a = 1;
const ps = require("prompt-sync");
const prompt = ps();

let n = prompt("\nChoose an option: \n\n(+)\n(-)\n(q) for quit\n");

while(n !== "q"){
    const counter = (count, a) => {
        if (n == "+") {
            return counter = count + a;
        }
        else if (n == "-") {
            return counter = count - a;
        }
        else {
            console.log("\nInvalid command\n");
            break;
        }
    }
}