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

async function process1() {
    let downloadedData1 = await fetchDataFromURL("www.google.com");
    let file1 = await writeToFile(downloadedData1);
    let uploadResponse1 = await uploadFileToURL(file1, "www.drive.google.com");
    return uploadResponse1;
}


async function process2() {
    let downloadedData2 = await fetchDataFromURL("www.google.com");
    let file2 = await writeToFile(downloadedData2);
    let uploadResponse2 = await uploadFileToURL(file2, "www.onedrive.com");
    return uploadResponse2;
}

async function process3() {
    let downloadedData3 = await fetchDataFromURL("www.google.com");
    let file3 = await writeToFile(downloadedData3);
    let uploadResponse3 = await uploadFileToURL(file3, "www.metabase.com");
    return uploadResponse3;
}


console.log("Start");
Promise.all([process1(), process2(), process3()]).then(function process(value) {
    console.log(value);
})
console.log("End");

