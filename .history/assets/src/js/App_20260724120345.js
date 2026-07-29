import '../styles/styles.scss';

if (module.hot) {
    module.hot.accept();
}
/* Leeson code below this line ------*/
function person(perSon){

        console.log("Hello my name is" + ' ' + perSon --> name + ' ' + "my favorite color is " + perSon --> favoriteColor + ".");


}

let nameList = [{name: "John Doe", favoriteColor: "blue"}, {name: "Jody Talor", favoriteColor: "pink"}];

person(nameList);
