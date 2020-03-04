#!/bin/bash

# Copied from https://github.com/ef4/ember-auto-import/blob/master/scripts/link-them.sh

set -e

# All packages get a node_modules directory and a .bin link
for package in "new-app"; do
    mkdir -p ./test-apps/$package/node_modules
    pushd ./test-apps/$package/node_modules > /dev/null
    rm -rf .bin
    ln -s ../../../node_modules/.bin .bin
    rm -rf .bin/sha.js
    popd > /dev/null
done

# These packages get to depend on ember-argument-decorator
for package in "new-app"; do
    pushd ./test-apps/$package/node_modules > /dev/null
    rm -rf ./ember-argument-decorator
    ln -s ../../.. ./ember-argument-decorator
    popd > /dev/null
done
