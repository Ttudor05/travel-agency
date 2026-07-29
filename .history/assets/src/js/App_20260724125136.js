import { forEach } from 'lodash';
import '../styles/styles.scss';

if (module.hot) {
    module.hot.accept();
}
/* Leeson code below this line ------*/

function person(peoPle){
        // 2. Call forEach on the passed array
        peoPle.forEach((person) => {
            
            // 3. Access the object properties using dot notation
            person.greet();
        });

}

const nameList = [{name: "Billy Bobb", favoriteColor: "blue", greet: function(){ console.log("Hello my name is" + ' ' +   this.name
                   + ' ' + "my favorite color is " + this.favoriteColor + ".")}}, {name: "Jody Talor", favoriteColor: "pink"
                , greet: function(){ console.log("Hello my name is" + ' ' +   this.name
                   + ' ' + "my favorite color is " + this.favoriteColor + ".")}}];

person(nameList);
