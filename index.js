/** @fileOverview 文件内容替换
  * @author Lone
  *
  * @usage readme.md
  */

'use strict';
var util = require('util');

module.exports = function(content, file, conf) {
    var _conf = util.isArray(conf) ? conf : [conf||{}];
    
    _conf.forEach(function( conf ){
        var f = false;
        if (conf.reg && util.isRegExp(conf.reg) ){
            f = conf.reg.test( file.id );
        }
        if (conf.ext && file.rExt == conf.ext) {
            f = true;
        }
        if (f && conf.from ) {
            content = content.replace(conf.from, conf.to || '');
        }
    });

	return content; 
};
