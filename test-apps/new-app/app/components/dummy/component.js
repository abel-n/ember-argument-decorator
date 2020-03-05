import Component from '@glimmer/component';
import argument from 'ember-argument-decorator';
import { htmlSafe } from '@ember/string';

export default class DummyComponent extends Component {
  @argument firstName = 'Travis'

  _lastName = 'Rice'

  get lastName() {
    return this.computeLastName();
  }

  @argument
  computeLastName() {
    return this._lastName;
  }

  get objectProperties() {
    if (!this.firstName || typeof this.firstName !== 'object') {
      return '';
    }

    const entries = Object.entries(this.firstName).reduce((ret, [key, value], index) => (
      ret += `
        <div data-test-prop="${index}">
          <div data-test-key>${key}</div>
          <div data-test-value>${value}</div>
        </div>
      `
    ), '');

    return htmlSafe(entries);
  }
}
