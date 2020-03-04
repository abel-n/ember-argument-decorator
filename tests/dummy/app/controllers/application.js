import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked name
  @tracked newName

  @action
  changeName() {
    this.name = this.newName;
    this.newName = undefined;
  }
}
