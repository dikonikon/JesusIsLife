var global = (function () {
    return this;
})();
var nodeRequire = global.require && global.require.nodeRequire;
if (!nodeRequire) {
    throw new Error('Cannot find the Node.js require');
}
var module = nodeRequire('module');
function load(id, contextRequire, load) {
    /*global define:true */
    if (module._findPath && module._nodeModulePaths) {
        var localModulePath = module._findPath(id, module._nodeModulePaths(contextRequire.toUrl('.')));
        if (localModulePath !== false) {
            id = localModulePath;
        }
    }
    var oldDefine = global.define;
    var result;
    global.define = undefined;
    try {
        result = nodeRequire(id);
    }
    finally {
        global.define = oldDefine;
    }
    load(result);
}
exports.load = load;
function normalize(id, normalize) {
    if (id.charAt(0) === '.') {
        id = require.toUrl(normalize('./' + id));
    }
    return id;
}
exports.normalize = normalize;
//# sourceMappingURL=node.js.map