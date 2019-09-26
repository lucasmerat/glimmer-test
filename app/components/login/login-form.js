import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class LoginLoginFormComponent extends Component {

  @tracked
  userId = ''

  get isDisabled() {
    return !this.userId
  }

  handleSignIn(value) {
    console.log('sign in user with id of:', value);
  }

  /**
   *
   * @param {Event & { target: HTMLSelectElement}} evt
   */
  @action
  onSelectChange(evt) {
    const { value } = evt.target

    this.userId = value;
  }

  /**
   *
   * @param { Event & { target: HTMLFormElement }} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();

    this.handleSignIn(this.userId);
  }
}
