function downloadData(url) {
    console.log("Download function started its execution");
    return new Promise(function process(resolve, reject) {
        console.log("Promise is created");
        setTimeout(function processing() {
            console.log("Download Timer is completed");
            let data = "Dummy downloaded data";
            resolve(data);
        }, 10000);
        console.log("Timer started");
    });
}

console.log("START");
x = downloadData("www.geeksforgeeks.org");
console.log(x); // state: pending, value: undefined
console.log("END");
setTimeout(function doIt(){
    console.log("After 12 seconds");
    console.log(x); // state: fulfilled, value = "Dummy downloaded data"
}, 12000);