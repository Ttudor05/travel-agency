function Person(fullName,favColor){
    this.Name = fullName;
    this.favoriteColor = favColor;
    this.greet = function(){
                console.log("Hello my name is" + ' ' +   this.Name
                 + ' ' + "my favorite color is " + this.favoriteColor + ".")
    }


}

let john = new Person("John George", "Purple");
john.greet();

let jody = new Person("Jody West", "Orange");
jody.greet();




export default Person