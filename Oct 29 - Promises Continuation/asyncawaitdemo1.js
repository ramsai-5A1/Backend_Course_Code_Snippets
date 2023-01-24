function fetchDataFromURL(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from ", url);
        setTimeout(function processDownloading(){
            let data = "Dummy downloaded data";
            resolve(data);
        }, 7000);
    });
}


async function processing () {
   console.log("Entering processing");
   let value1 = await fetchDataFromURL("www.geeksforgeeks.org");
   console.log("GFG downloading done");
   let value2 = await fetchDataFromURL("www.stackoverflow.com");
   console.log("Stackoverflow downloading done");
   console.log("Exiting processing");
   return value1 + value2;
}

console.log("Start");
setTimeout(function timer1() {
    console.log("timer 1");
}, 0);
console.log("After setting timer 1");
let x = processing();
x.then(function (value) {
    console.log("Finally processing promise resolves with ", value);
});
setTimeout(function timer2() {
    console.log("timer 2");
}, 1000);

setTimeout(function timer3() {
    console.log("timer 3");
}, 0);
console.log("End");

