/*  how can we write a function to download some data from a url, and not use callbacks
    instead use promises
*/


function fetch(url) {
    // promise constructor expects one parameter which is a function
    // That function is going to have two parameters --> 'resolve' and 'reject'
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from ", url);
        setTimeout(function process() {
            let data = "Dummy data";
            console.log("Completed fetching the data");
            resolve(data);
        }, 4000);
    });
}