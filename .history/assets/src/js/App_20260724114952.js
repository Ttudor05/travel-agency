import '../styles/styles.scss';

if (module.hot) {
    module.hot.accept();
}
/* Leeson code below this line ------*/
function person($name, $color){

        console.log("Hello my name is" + ' ' + $name + ' ' + "my favorite color is " + $color + ".");


}

person("John Doe", "blue");
person("Jane Smith", "green");