export default function(target, property, descriptor) {
  let defaultValue = descriptor.initializer();
  return {
    get() {
      let arg = this.args && this.args[property];
      return arg !== undefined ? arg : defaultValue;
    },
    enumerable: true,
    configurable: true
  };
}
