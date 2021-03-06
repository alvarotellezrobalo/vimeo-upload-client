# vimeo-upload-client
Vimeo nodejs client to upload videos from public link or direclty from video file.

You can use this library in your projects to upload videos to vimeo from your own or third-party application.

To upload videos to vimeo from your own application it is necessary that in your vimeo account you configure an application client and obtain an Access token to be able to access from your application and be able to upload the videos.

# Install

Using npm in Node.js project
> npm install vimeo-upload-client

# Setup

Once the module is installed in your project, you must import it to be able to use it.

```javascript
const vimeo = require('vimeo-upload-client');

var vimeoClient = new vimeo(clientID, clientSecret, accessToken);
```

# Upload from video file (binary)

To upload a video file that is on the server, the file must be read and the content passed to the method.

```javascript
const vimeo = require('vimeo-upload-client');
const fs = require('fs');

var vimeoClient = new vimeo(clientID, clientSecret, accessToken);

//Read the file
var file = fs.readFileSync('path/video.mp4');

//Call the uploader
var params = {
    video: file,
    name: 'name',
    description: 'description',
    folder: 'vimeo folderID' //Optional if you want to upload the file to a specific folder
};

//Return a promise
vimeoClient.uploadFromBinary(params).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

```

# Upload from video link (public)

To upload a video file through an internet link, it must be public.

```javascript
const vimeo = require('vimeo-upload-client');
const fs = require('fs');

var vimeoClient = new vimeo(clientID, clientSecret, accessToken);

//Call the uploader
var params = {
    link: 'http://link.com/video.mp4',
    name: 'name',
    description: 'description',
    folder: 'vimeo folderID' //Optional if you want to upload the file to a specific folder
};

//Return a promise
vimeoClient.uploadFromLink(params).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

```
