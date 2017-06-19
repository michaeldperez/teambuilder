import resolve  from 'rollup-plugin-node-resolve';
import babel    from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import html     from 'rollup-plugin-html';

export default {
  entry: 'client/index.js',
  dest: 'dist/client/index.js',
  format: 'iife',
  moduleName: 'teambuilder',
  sourceMap: true,
  globals: {
    'angular': 'angular',
    'angular-ui-router': 'uiRouter'
  },
  // external:[
  //   'angular',
  //   'angular-ui-router'
  // ],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    html({
      "include": "client/**/*.html"
    }),
    babel({
      "babelrc": false,
      "presets": ["es2015-rollup"]
    })
  ]
};