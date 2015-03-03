var fs = require('fs');

var replacer = require('../index.js');

var conf = [{
    ext: '.tpl', 
    from: 'file="', 
    to: 'file="newdoctor/'
},{
    reg: /content/,
    from: 'hello',
    to: 'Hello'
}];

fs.readFile('./content.tpl', 'utf8', function(err, data){
	var c = replacer(data, {id: './content.tpl', rExt: '.tpl'}, conf);
	fs.writeFile('./content0.tpl', c);
});


fs.readFile('./content.js', 'utf8', function(err, data){
	var c = replacer(data, {id: './content.js', rExt: '.js'}, conf);
	fs.writeFile('./content0.js', c);
});
