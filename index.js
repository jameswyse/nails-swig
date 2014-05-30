var swig  = require('swig');
var utils = require('nails-utils');

module.exports  = swig;
exports.filters = {};
exports.tags    = {};

//
// Set default options
//
swig.setDefaults({
  cache: process.env.NODE_ENV === 'production' ? 'memory' : false
});

//
// Load all filters
//
utils.finder({
  cwd: __dirname,
  pattern: './filters/*.js'
}, addFilter);

//
// Load all tags
//
utils.finder({
  cwd: __dirname,
  pattern: './tags/*.js'
}, addTag);


//
// Add a filter to swig by filename
//
function addFilter(filename) {
  var func = require(filename);
  var name = func.name || utils.path.basename(filename, '.js');

  exports.filters[name] = func;

  swig.setFilter(name, func);
}

//
// Add a tag to swig by filename
//
function addTag(filename) {
  var obj  = require(filename);
  var name = obj.name || utils.path.basename(filename, '.js');

  exports.tags[name] = obj;

  swig.setTag(name, obj.parse, obj.compile, obj.ends, obj.blockLevel);

  if(obj.ext) {
    swig.setExtension(obj.ext.name, obj.ext.obj);
  }
}
