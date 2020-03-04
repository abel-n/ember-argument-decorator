import Component from '@glimmer/component';
import argument from 'ember-argument-decorator';

export default class DummyComponent extends Component {
  @argument name = "Travis Rice"
}
