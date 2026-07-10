var fs = require('fs');
var https = require("https");

fs.writeFile(__dirname + "/index.html","<h1>is great</h1>",function(error){
    if(error){
        return console.log(error);
    } else {
        return console.log("Congrats!!!");
    }
});

var mushroom = 'https://opb-opb-prod.cdn.arcpublishing.com/resizer/v2/QVVKTAG7DVCSDH6RZZVYKNP4RY.jpg?auth=3983e064f5fc64ee727ecf296f11f6bf6d921ca3d5b2929dcda660bd447ea34e&width=1440';
https.get(mushroom,function(response){
 response.pipe(fs.createWriteStream(__dirname + "/ps-mushrooms.jpg"))
});