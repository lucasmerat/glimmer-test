import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginLoginFormComponent extends Component {

  handleSignIn(value) {
    console.log('sign in user with id of:', value);
  }

  /**
   *
   * @param { Event & { target: HTMLFormElement }} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    const { target } = evt;
    const selectElement = evt.target.querySelector('select');

    this.handleSignIn(selectElement.value);
  }
}
