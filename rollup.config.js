import resolve from 'rollup-plugin-node-resolve';
import babel   from 'rollup-plugin-babel';

export default {
  entry: 'client/index.js',
  format: 'iife',
  moduleName: 'app',
  dest: 'dist/bundle.js',
  sourceMap: true,
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: []
};

