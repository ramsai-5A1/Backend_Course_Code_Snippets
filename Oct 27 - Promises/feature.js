function fetchDataFromURL(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from ", url);
        setTimeout(function processDownloading(){
            let data = "Dummy downloaded data";
            console.log("Download completed");
            resolve(data);
        }, 5000);
    });
}

function writeToFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file");
        setTimeout(function processWriting() {
            let textFile = "output.txt";
            console.log("Write completed");
            resolve(textFile);
        }, 3000);
    });
}

function uploadFileToURL (file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Uploading ", file, " to ", url, " started");
        setTimeout(function processingUpload() {
            let result = "SUCCESS";
            console.log("upload completed");
            resolve(result);
        }, 5000);
    });
}

/*
let data = fetchDataFromURL("www.geeksforgeeks.org");
let fileName = writeToFile(data);
let response = uploadFileToURL(fileName, "www.drive.google.com");

The above code will not work in read fashion
*/

/*
let downloadPromise = fetchDataFromURL("www.geeksforgeeks.org");
downloadPromise.then(function processDownload(value) {
    console.log("Download Promise fulfilled");
    let writePromise = writeToFile(value);
    writePromise.then(function processWrite(value) {
        console.log("Writing of file completed");
        resolve(value);
        resolve("Heyy"); // This line is not executed
        resolve("Hello"); // This line as well is not executed
        console.log("how are you"); // This line is executed.
    });
});
*/

let downloadPromise = fetchDataFromURL("www.geeksforgeeks.org");
downloadPromise.then(function processDownload(value) {
    console.log("Downloading done with following value", value);
    return value;
})
.then(function procesWrite(value) {
    let obj = writeToFile(value);
    return obj;
})
.then(function processUpload(value) {
    let obj = uploadFileToURL(value, "www.drive.google.com");
    return obj;
});
console.log("ended");

/*
 As compared with callbacks design which we've followed earlier, this promise based design is eliminating
inversion of control, as we are not giving the control of function to someone else. But still we are facing callback hell (i.e promise hell in this case)
*/

