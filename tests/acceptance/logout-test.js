import { module, test } from 'qunit';
import { visit, currentURL, click, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import StubbedAuthService from 'shlack/tests/test-helpers/auth-service';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:auth', StubbedAuthService);
  });

  test('visiting /teams', async function(assert) {
    const auth = this.owner.lookup('service:auth');
    auth.currentUserId = '1';

    await visit('/teams'); // Go to a URL

    assert.equal(currentURL(), '/teams'); // Make sure we've arrived

    await click('[data-test-logout-button]'); // Click a button

    assert.equal(currentURL(), '/login'); // Make sure we're now at /login
  });

  test('visiting /teams while logged out', async function (assert) {
    const auth = this.owner.lookup('service:auth');
    auth.currentUserId = null;

    await visit('/teams');

    assert.equal(currentURL(), '/login');
  });
});
