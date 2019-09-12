import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const input = './src/index.js';
const cssExportMap = {};
const external = id => !id.startsWith('.') && !id.startsWith('/');

export default [
    {
        input,
        output: {
            file: pkg.main,
            format: 'cjs'
        },
        external,
        plugins: [
            babel({
                runtimeHelpers: true,
                plugins: ['@babel/transform-runtime']
            }),
            nodeResolve(),
            postcss({
                getExportNamed: false,
                getExport(id) {
                    return cssExportMap[id];
                },
                extract: 'dist/index.css',
            }),
            commonjs()
        ]
    }
];