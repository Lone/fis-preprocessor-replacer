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
        if (f && conf.from) {
            var to = conf.to || '';

            if ( !util.isRegExp(conf.from) ){
                conf.from = new RegExp( conf.from, 'g' );
            }

            content = content.replace(conf.from, to);
        }
    });

	return content; 
};
