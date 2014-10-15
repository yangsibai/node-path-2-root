/**
 * Created by massimo on 14-10-11.
 */

var path = require("path");

_getPath = exports.path  = function(name){
    return path.join(__dirname, '../../', name)
};

exports._ = function(name){
    console.warn("p2r._ will be deleted, please use p2r.path.");
    return _getPath(name);
};

exports.require = function(name){
    return require(_getPath(name))
};