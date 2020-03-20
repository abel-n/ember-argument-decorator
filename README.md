ember-argument-decorator
==============================================================================

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```shell
ember install ember-argument-decorator
```

Usage
------------------------------------------------------------------------------

```js
import Component from '@glimmer/component';
import argument from 'ember-argument-decorator';

export default class XComponent extends Component {
  @argument searchEnabled = true
}
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
