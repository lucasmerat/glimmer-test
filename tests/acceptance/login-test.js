import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import StubbedAuthService from 'shlack/tests/test-helpers/auth-service';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:auth', StubbedAuthService);
  });

  test('visiting /login', async function(assert) {
    const auth = this.owner.lookup('service:auth');
    auth.currentUserId = null;

    await visit('/login');
    assert.equal(currentURL(), '/login');

    await fillIn('select', '1');
    await click('form input[type="submit"]');

    assert.ok(currentURL().startsWith('/teams'));
  });
});
