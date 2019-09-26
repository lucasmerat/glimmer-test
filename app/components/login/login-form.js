import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';
export default class LoginLoginFormComponent extends Component {

  /**
   * @type { AuthService }
   */
  @service auth

  @tracked
  userId = ''

  get isDisabled() {
    return !this.userId
  }

  handleSignIn(value) {
    console.log('sign in user with id of:', value);

    this.auth.loginWithUserId(value);
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
