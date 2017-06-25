#!/usr/bin/env node

const getDontpad = require('../src/main');

const args = process.argv.slice(2);
const path = args[0]

if (!path) {
  console.log('path required');
  process.exit(-1);

}

getDontpad(path).then(text => console.log(text))
                .catch(err => console.error('Error: ', err.message || err))
