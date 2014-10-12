/**
 * Created by massimo on 14-10-11.
 */

var path = require("path");

exports._ = exports.path = function(name){
    return path.join(__dirname, '../../', name)
};