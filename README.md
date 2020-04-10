ember-argument-decorator
==============================================================================

This decorator is a wrapper for providing argument defaults for Glimmer components in a simple manner. It supports primitives, objects and functions. It also seems to support getters but that is untested yet.


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

Provide default value in component.

```js
import Component from '@glimmer/component';
import argument from 'ember-argument-decorator';

export default class XComponent extends Component {
  @argument searchEnabled = true
}
```

Use `this.argumentName` instead of `@argumentName` to refer to it in template.

```hbs
{{#if this.searchEnabled}}
  {{!-- do something --}}
{{/if}}
```

The decorator updates the reference when arguments change.

```hbs
<XComponent @searchEnabled={{optionalValue}} />
```


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
