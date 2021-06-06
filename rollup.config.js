import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import { visualizer } from 'rollup-plugin-visualizer';
import commonjs from '@rollup/plugin-commonjs';

import packageJson from './package.json';

const config = [
  {
    input: {
      index: 'src/index.js',
      useFirestore: 'src/useFirestore.js',
      useFirestoreGetOne: 'src/useFirestoreGetOne.js',
      useFirestoreGetList: 'src/useFirestoreGetList.js',
      useFirestoreQuery: 'src/useFirestoreQuery.js',
    },
    output: [
      {
        name: packageJson.name,
        dir: 'dist/es',
        format: 'es',
        sourcemap: true,
      },
      {
        name: packageJson.name,
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    external: ['react', 'firebase', 'firebase/auth', 'firebase/firestore', 'prop-types'],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      nodeResolve(),
      commonjs(),
      visualizer(),
    ],
    watch: {
      clearScreen: false,
    },
  },
];

export default config;
