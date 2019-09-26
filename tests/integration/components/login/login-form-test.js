import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | login/login-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Login::LoginForm />`);

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
        ['Login', 'Select a user', 'Testy Testerson', 'Sample McData']
    );
  });

  test('after selecting a user "Sign In" button enabled', async function (assert) {
    await render(hbs`<Login::LoginForm />`);

    let button = /** @type {HTMLInputElement} */ (find('input[type="submit"]'));
    let select = /** @type {HTMLSelectElement} */ (find('select'));

    await fillIn('select', '1');

    assert.equal(select.value, '1', '<option value="1"> is currently selected');

    assert.equal(button.disabled, false, 'The submit button is no longer disabled');

    assert.deepEqual(
      this.element.textContent
      .trim()
      .replace(/\s*\n+\s*/g, '\n')
      .split('\n'),
      [
        'Login',
        'Select a user',
        'Testy Testerson',
        'Sample McData',
        'Logging in with userId: 1',
      ],
      'validation text now shows up');
  });
});
