import resolve  from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'server/index.js',
  dest: 'dist/server/index.js',
  format: 'cjs',
  external: [
    'mongodb',
    'express',
    'body-parser',
    'path'
  ],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      },
      "jsnext": true,
      "main": true
    }),
    commonjs()
  ]
};