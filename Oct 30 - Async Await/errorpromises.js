function fetchDataFromURL(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from ", url);
        setTimeout(function processDownloading(){
            let data = "Dummy downloaded data";
            reject(data);
        }, 5000);
    });
}

let x = fetchDataFromURL("www.google.com");
x.then(function success(value) {
    console.log("Success ", value);
}, function err(err) {
    console.log("error is", err);
});