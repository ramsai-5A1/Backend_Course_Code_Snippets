function process() {
    console.log("Start");
    setTimeout(function exec() {
        console.log("Timeout executed");
    }, 5000);
    console.log("End");
}

console.log("Global start");
process();
console.log("Global end");