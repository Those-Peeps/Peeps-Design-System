import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true,
  },
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: false,
  esbuildPlugins: [
    {
      name: 'rewrite-styled-system-imports',
      setup(build) {
        // Rewrite styled-system/* imports to @those-people/peeps-design-system/styled-system/*
        build.onResolve({ filter: /^styled-system\// }, (args) => {
          return {
            path: args.path.replace('styled-system/', '@those-people/peeps-design-system/styled-system/'),
            external: true,
          };
        });
      },
    },
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
