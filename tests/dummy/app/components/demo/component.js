import Component from '@glimmer/component';
import argument from 'ember-argument-decorator';

export default class DemoComponent extends Component {
  @argument name = 'Travis Rice'
}
