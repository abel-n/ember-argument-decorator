import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { set } from '@ember/object';
import { run } from '@ember/runloop';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dummy', function(hooks) {
  setupRenderingTest(hooks);

  test('it shows arguments and their defaults appropriately', async function(assert) {
    assert.expect(4);

    await render(hbs`<Dummy @name={{this.name}} />`);
    assert.dom().hasText('Travis Rice', 'shows default value when there is no argument to pass');

    run(() => set(this, 'name', null));
    assert.dom().hasNoText('shows nothing when argument is null');

    run(() => set(this, 'name', undefined));
    assert.dom().hasText('Travis Rice', 'shows default value when argument is undefined');

    run(() => set(this, 'name', 'Anna Gasser'));
    assert.dom().hasText('Anna Gasser', 'shows passed in argument');
  });
});
