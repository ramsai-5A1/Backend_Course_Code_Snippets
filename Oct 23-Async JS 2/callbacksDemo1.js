/* Tasks:
    1. write a function to download data from a url
    2. write a function to save that downloaded data in a file and return the filename
    3. write a function to upload the file written in previous step to a newurl
*/


function saveDataIntoFile(data, fn) {
    console.log("Write started: ", data);

    setTimeout(function process2() {
        console.log("Write completed");
        let fileName = "output1.txt";
        fn(fileName);
    }, 4000);
}


function fetchCustom(url, fn) { // we are mimicing the function
    /* download content of the url
    this downloading can take sometime
    we will download the content from url, and then whatever is the result, we will pass to the callback */
    console.log("Starting downloading from: ", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
    }, 3000);
}

function uploadFile(fileName, newUrl, fn) {
    console.log("Upload is starting");
    setTimeout(function process() {
        console.log("File ", fileName, " upload is completed to ", newUrl);
        let uploadResponse = "SUCCESS";
        fn(uploadResponse);
    }, 3000);
}


fetchCustom("www.google.com", function downloadCallback(response) {
    console.log("Downloaded response is: ", response);
    saveDataIntoFile(response, function writeCallback(fileName) {
        console.log("Write is completed successfully into file: ", fileName);
        uploadFile(fileName, "www.googledrive.com", function uploadCallback(response) {
            console.log("Uploadation response: ", response);
        });
    });
});