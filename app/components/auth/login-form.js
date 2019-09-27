import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthLoginFormComponent extends Component {

  @tracked
  userId = '1'

  get isDisabled() {
    return !this.userId
  }

  handleUserLogin(value) {
    console.log('user login is ', value)
  }

  @action
  onChangeSelect(event){
    const { target } = event;
    this.userId = target.value;
  }

  @action
  onLoginFormSubmit(event) {
    event.preventDefault();

    this.handleUserLogin(this.userId);
  }
}
