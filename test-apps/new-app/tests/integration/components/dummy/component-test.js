import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dummy', function(hooks) {
  setupRenderingTest(hooks);

  test('it shows arguments and their defaults appropriately', async function(assert) {
    assert.expect(1);

    await render(hbs`<Dummy />`);

    assert.dom().hasText('Travis Rice');
  });
});
