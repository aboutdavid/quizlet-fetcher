import * as esbuild from 'esbuild'
import { clean } from 'esbuild-plugin-clean';

await esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  outdir: 'dist',
  format: "esm",
  outExtension: { '.js': '.min.mjs' },
	minify: true,
  plugins: [
		clean({
			cleanOn: "start",
	  	patterns: ['./dist/*',]
		})
  ]
})

await esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  outdir: 'dist',
  format: "cjs",
	minify: true,
  outExtension: { '.js': '.min.cjs' }
})

await esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  outdir: 'dist',
  format: "iife",
	minify: true,
  outExtension: { '.js': '.min.iife.js' }
})