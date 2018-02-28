// @flow
'use strict';

const STAGES = {
  '0': [
    'doExpressions',
    'functionBind',
  ],
  '1': [
    'exportExtensions',
    'exportDefaultFrom',
    'exportNamespaceFrom',
    'decorators',
    'optionalChaining',
    'pipelineOperator',
    'nullishCoalescingOperator',
  ],
  '2': [
    'decorators2',
    'functionSent',
    'throwExpressions',
  ],
  '3': [
    'classProperties',
    'classPrivateProperties',
    'classPrivateMethods',
    'dynamicImport',
    'importMeta',
    'numericSeparator',
    'bigInt',
    'optionalCatchBinding',
  ],
  '4': [
    'objectRestSpread',
    'asyncGenerators',
  ],
};

/*::
export type Options = {
  sourceType?: "script" | "module",
  stage?: number,
  plugins?: Array<string>,
  [opt: string]: any,
};
*/

function createBabylonOptions(opts /*: Options */) {
  let {sourceType, stage, plugins} = opts;
  let set = new Set(plugins);

  if (typeof stage === 'number') {
    for (let i = stage; i <= 4; i++) {
      for (let plugin of STAGES[i]) {
        set.add(plugin);
      }
    }
  }

  let clone = Object.assign({}, opts);

  delete clone.sourceType;
  delete clone.stage;
  delete clone.plugins;

  return Object.assign({}, {
    sourceType: sourceType || 'module',
    plugins: Array.from(set),
  }, clone);
}

module.exports = createBabylonOptions;
