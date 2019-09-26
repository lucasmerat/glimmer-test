import Component from '@glimmer/component';
import AuthService from 'shlack/services/auth';
import { inject as service } from '@ember/service';

export default class TeamSidebarComponent extends Component {

  /**
   * @type { AuthService }
   */
  @service auth
}
