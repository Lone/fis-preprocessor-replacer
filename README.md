# fis-preprocessor-replacer
在preprocessor阶段对内容做替换

##用法
在fis-conf.js中配置：

```javascript
fis.config.merge({
    modules : {
        preprocessor: {
            tpl: 'replacer',  //要调用内容替换插件的文件类型
            js: 'replacer'
        }
    },
    settings : {
        preprocessor: {
            replacer: {
                reg: /\/page\/.+\.tpl$/,
                from: '{%extend file="',
                to: '{%extend file="newdoctor'
            }
        }
    }
});
```
