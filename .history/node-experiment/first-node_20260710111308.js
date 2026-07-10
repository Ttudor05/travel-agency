var fs = require('fs');
var https = require("https");

fs.writeFile(__dirname + "/index.html","<h1>is great</h1>",function(error){
    if(error){
        return console.log(error);
    } else {
        return console.log("Congrats!!!");
    }
});

var mushroom = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Psilocybe_semilanceata_6514.jpg'
https.get(mushroom,function(response){
 response.pipe(fs.createWriteStream(__dirname + "/ps-mushrooms.jpg"))
});