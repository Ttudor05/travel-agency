var fs = require('fs');
fs.writeFile(__dirname + "/index.html","<h1>is great</h1>",function(error){
    if(error){
        return consol.log(error);
    } else {
        return consol.log("Congrats!!!");
    }
})