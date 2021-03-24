# vite-plugin-vue-jsx-issue-20210324
For issue reproduction

[https://github.com/vitejs/vite/issues/2662](https://github.com/vitejs/vite/issues/2662)

## Reproducibility procedure
1. `npm install`
2. `npm start`
3. Open [http://localhost:3000](http://localhost:3000)
4. Check the following log

```node
10:23:28 [vite] Error when evaluating SSR module /App.tsx:
ReferenceError: __default__ is not defined
    at eval (/App.tsx:20:41)
    at instantiateModule (/Users/dadajam4/projects/develops/vite-plugin-vue-jsx-issue-20210324/node_modules/vite/dist/node/chunks/dep-efe32886.js:68893:166)
ReferenceError: __default__ is not defined
    at eval (/App.tsx:20:41)
    at instantiateModule (/Users/dadajam4/projects/develops/vite-plugin-vue-jsx-issue-20210324/node_modules/vite/dist/node/chunks/dep-efe32886.js:68893:166)
ReferenceError: __default__ is not defined
    at eval (/App.tsx:20:41)
    at instantiateModule (/Users/dadajam4/projects/develops/vite-plugin-vue-jsx-issue-20210324/node_modules/vite/dist/node/chunks/dep-efe32886.js:68893:166)
```

## Correction procedure
1. Modify `vite.config.ts`

```ts
// import vueJsx from '@vitejs/plugin-vue-jsx';
// ↓Swap comments
import vueJsx from './.customs/plugin-vue-jsx'; // Use fixed plugin.

```

2. `npm start`
3. Open [http://localhost:3000](http://localhost:3000)
4. Confirm that the screen is displayed normally
