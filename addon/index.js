function generateDefaultGetter(descriptor) {
  const { get: getter, initializer, value } = descriptor;

  if (value) {
    // method
    return () => value;
  } else if (getter) {
    return getter;
  }

  // class field
  return initializer;
}

export default function(target, property, descriptor) {
  const getDefault = generateDefaultGetter(descriptor);

  return {
    get() {
      let arg = this.args && this.args[property];
      return arg !== undefined ? arg : getDefault.call(this);
    },
    enumerable: true,
    configurable: true
  };
}
