import { forEach } from 'lodash';
import '../styles/styles.scss';

if (module.hot) {
    module.hot.accept();
}
/* Leeson code below this line ------*/

function Person(fullName,favColor){
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function(){
                console.log("Hello my name is" + ' ' +   this.fullName
                 + ' ' + "my favorite color is " + this.favoriteColor + ".")
    }


}

let john = new Person("John George", "Purple");
john.greet();

let jody = new Person("Jody West", "Orange");
jody.greet();
