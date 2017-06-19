
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
  plugins: []
};