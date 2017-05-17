# babylon-options

> Simplified options for [Babylon](https://github.com/babel/babylon)

**Before:**

```js
babylon.parse(code, {
  sourceType: 'module',
  plugins: [
    'jsx',
    'flow',
    'doExpressions',
    'objectRestSpread',
    'decorators',
    'classProperties',
    'exportExtensions',
    'asyncGenerators',
    'functionBind',
    'functionSent',
    'dynamicImport',
  ],
});
```

**After:**

```js
import * as babylon from 'babylon';
import createBabylonOptions from 'babylon-options';

babylon.parse(code, createBabylonOptions({
  stage: 2,
  plugins: ['flow', 'jsx'],
}));
```

## Options

All Babylon options will be passed through, will some additions/modifications:

- `sourceType`: Defaults to "module"
- `stage`: Set plugins based on TC39 stages
- `plugins`: You can still specify plugins, other options will add to this list
