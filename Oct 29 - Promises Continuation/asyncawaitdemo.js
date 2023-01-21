function fetchDataFromURL(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from ", url);
        setTimeout(function processDownloading(){
            let data = "Dummy downloaded data";
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

async function processing () {
    let downloadedData = await fetchDataFromURL("www.geeksforgeeks.org");
    console.log("Downloading await completed", downloadedData);
    let file = await writeToFile(downloadedData);
    console.log("writing await completed", file);
    let uploadResponse = await uploadFileToURL(file, "www.drive.google.com");
    console.log("Uploading await completed", uploadResponse);
    console.log("Completed process with response: ", uploadResponse);
    return true;
}

console.log("Start");
processing();
console.log("End");

