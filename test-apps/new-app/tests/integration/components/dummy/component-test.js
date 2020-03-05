import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { set } from '@ember/object';
import { run } from '@ember/runloop';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dummy', function(hooks) {
  setupRenderingTest(hooks);

  test('it handles primitives', async function(assert) {
    assert.expect(6);

    await render(hbs`<Dummy @firstName={{this.firstName}} />`);
    assert.dom('[data-test-first-name]').hasText('Travis', 'no argument');

    run(() => set(this, 'firstName', null));
    assert.dom('[data-test-first-name]').hasNoText('null');

    run(() => set(this, 'firstName', undefined));
    assert.dom('[data-test-first-name]').hasText('Travis', 'undefined');

    run(() => set(this, 'firstName', 'Anna'));
    assert.dom('[data-test-first-name]').hasText('Anna', 'string');

    run(() => set(this, 'firstName', 3));
    assert.dom('[data-test-first-name]').hasText('3', 'number');

    run(() => set(this, 'firstName', false));
    assert.dom('[data-test-first-name]').hasText('false', 'boolean');
  });

  test('it handles objects', async function(assert) {
    assert.expect(13);

    this.firstName = {};

    await render(hbs`<Dummy @firstName={{this.firstName}} />`);
    assert.dom('[data-test-object-properties]').hasNoText('empty object');

    run(() => set(this, 'firstName', { string: 'some value', number: 2, boolean: false }));
    assert.dom('[data-test-object-properties] [data-test-prop="0"] [data-test-key]').hasText('string', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="0"] [data-test-value]').hasText('some value', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="1"] [data-test-key]').hasText('number', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="1"] [data-test-value]').hasText('2', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="2"] [data-test-key]').hasText('boolean', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="2"] [data-test-value]').hasText('false', 'object');

    run(() => set(this, 'firstName', ['some other value', 3, true]));
    assert.dom('[data-test-object-properties] [data-test-prop="0"] [data-test-key]').hasText('0', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="0"] [data-test-value]').hasText('some other value', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="1"] [data-test-key]').hasText('1', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="1"] [data-test-value]').hasText('3', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="2"] [data-test-key]').hasText('2', 'object');
    assert.dom('[data-test-object-properties] [data-test-prop="2"] [data-test-value]').hasText('true', 'object');
  });

  test('it handles methods', async function(assert) {
    assert.expect(4);

    await render(hbs`<Dummy @computeLastName={{this.computeLastName}} />`);
    assert.dom('[data-test-last-name]').hasText('Rice', 'no argument');

    run(() => set(this, 'computeLastName', () => {}));
    assert.dom('[data-test-last-name]').hasNoText('empty function');

    run(() => set(this, 'computeLastName', undefined));
    assert.dom('[data-test-last-name]').hasText('Rice', 'undefined');

    run(() => set(this, 'computeLastName', () => 'Gasser'));
    assert.dom('[data-test-last-name]').hasText('Gasser', 'method returning value');
  });
});
