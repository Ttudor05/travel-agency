var fs = require('fs');
var https = require("https");

fs.writeFile(__dirname + "/index.html","<h1>is great</h1>",function(error){
    if(error){
        return console.log(error);
    } else {
        return console.log("Congrats!!!");
    }
});

var mushroom = 'https://www.google.com/imgres?q=Psilocybin%20mushrooms&imgurl=https%3A%2F%2Fcdn.britannica.com%2F66%2F202366-050-66AE450A%2Fpsilocybin-mushrooms-growing-forest.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fscience%2Fpsilocybin-mushroom&docid=tkEcD8fx1x27oM&tbnid=Gb9WdB9yNelkUM&vet=12ahUKEwij18iWsMiVAxXaz_ACHX3yMsgQnPAOegUI4gEQAA..i&w=1600&h=1067&hcb=2&ved=2ahUKEwij18iWsMiVAxXaz_ACHX3yMsgQnPAOegUI4gEQAA'
https.get(mushroom,function(response){
 response.pipe(fs.createWriteStream(__dirname + "/ps-mushrooms.jpg"))
});