const tus = require('tus-js-client');

function UploadVideoTusJs(uploadUrl, videoFile) {
    return new Promise((resolve, reject) => {
        
        var upload = new tus.Upload(videoFile, {
            uploadUrl: uploadUrl,
            onError: function (error) {
                console.log("Failed because: " + error);
                reject(error);
            },
            onSuccess: function (data) {
                console.log(data); //returns undefined
                console.log("Download %s from %s", upload.file.name, upload.url);
                resolve(data);
            }
        });

        // Start the upload by default
        upload.start();

    });
}

module.exports = {UploadVideoTusJs};