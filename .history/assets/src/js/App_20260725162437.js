import { forEach } from 'lodash';
import '../styles/styles.scss';
import Person from './modules/Person';

if (module.hot) {
    module.hot.accept();
}

let john = new Person("John George", "Futia");
john.greet();

let jody = new Person("Jody West", "Orange");
jody.greet();