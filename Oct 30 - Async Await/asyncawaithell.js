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
    let file = await writeToFile(downloadedData);
    let uploadResponse1 = await uploadFileToURL(file, "www.drive.google.com");
    let uploadResponse2 = await uploadFileToURL(file, "www.onedrive.com");
    let uploadResponse3 = await uploadFileToURL(file, "www.metabase.com");
    return true;
}

console.log("Start");
processing();
console.log("End");

