# babylon-options

> Simplified options for Babylon

```js
import * as babylon from 'babylon';
import createBabylonOptions from 'babylon-options';

babylon.parse(code, createBabylonOptions({
  stage: 2,
  flow: true,
  jsx: true,
}));
```

## Options

All Babylon options will be passed through, will some additions/modifications:

- `sourceType`: Defaults to "module"
- `stage`: Set plugins based on TC39 stages
- `flow`: Turn on Flow support
- `jsx`: Turn on JSX support
- `plugins`: You can still specify plugins, other options will add to this list
