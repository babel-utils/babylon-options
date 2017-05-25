// @flow
'use strict';

const STAGES = {
  '0': ['doExpressions', 'functionBind'],
  '1': ['exportExtensions'],
  '2': ['dynamicImport', 'classProperties', 'decorators', 'functionSent'],
  '3': ['objectRestSpread', 'asyncGenerators'],
  '4': [],
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

  return {
    sourceType: sourceType || 'module',
    plugins: Array.from(set),
    ...clone,
  };
}

module.exports = createBabylonOptions;
