class Person {

    constructor (name, favoiteColor) {

        this.name = name;
        this.favoiteColor = favoiteColor;

    }

    greet() {
         console.log("Hello my name is" + ' ' +   this.Name
                 + ' ' + "my favorite color is " + this.favoriteColor + ".")

    }
}



export default Person