import '../styles/styles.scss';

if (module.hot) {
    module.hot.accept();
}
/* Leeson code below this line ------*/
function person(myName, favColor){

        console.log("Hello my name is" + ' ' + myName + ' ' + "my favorite color is " + favColor + ".");


}

person("John Doe", "blue");
person("Jane Smith", "green");