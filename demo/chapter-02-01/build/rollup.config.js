const path = require('path');
const buble = require('rollup-plugin-buble');
const babel = require('rollup-plugin-babel');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  "presets": [
    ["env", {
      "modules": false
    }],
  ],
  "plugins": [
    "external-helpers",
    "transform-object-rest-spread",
    "transform-es2015-arrow-functions"
  ],
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
    }, 
    plugins: [
      babel(babelOptions),
      buble(),
    ],
  },
  {
    input: resolveFile('src/lib/index.js'),
    output: {
      file: resolveFile('dist/lib.js'),
      format: 'cjs',
    }, 
    plugins: [
      babel(babelOptions),
      buble(),
    ],
  }
]