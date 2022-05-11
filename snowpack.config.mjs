/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
    'svelte-preprocess-cssmodules'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { "match": "routes", "src": ".*", "dest": "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,

    bundle: true,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  root: "src",
};
