// @flow
'use strict';

const STAGES = {
  0: ['doExpressions', 'functionBind'],
  1: ['exportExtensions'],
  2: ['dynamicImport', 'classProperties', 'decorators', 'functionSent'],
  3: ['objectRestSpread', 'asyncGenerators'],
  4: []
};

/*::
type Options = {
  sourceType?: "script" | "module",
  stage?: number,
  jsx?: boolean,
  flow?: boolean,
  plugins?: Array<string>,
  [opt: string]: any,
};
*/

export default createBabylonOptions(opts /*: Options */) {
  let {sourceType, stage, jsx, flow, plugins, ...rest} = opts;
  let set = new Set(plugins);

  for (let i = stage; i <= 4; i++) {
    for (let plugin of STAGES[i]) {
      set.add(plugin);
    }
  }

  if (flow) set.add('flow')
  if (jsx) set.add('jsx');

  return {
    sourceType: sourceType || "module",
    plugins: Array.from(set),
    ...rest,
  };
}
