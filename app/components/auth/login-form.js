import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuthLoginFormComponent extends Component {
  handleUserLogin(value) {
    console.log('user login is ', value)
  }
  @action
  onLoginFormSubmit(event) {
    event.preventDefault();
    const { target } = event;

    const selectElement = target.querySelector('select');

    this.handleUserLogin(selectElement.value);
  }
}
