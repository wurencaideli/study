/**
 * 渲染函数
 * 文档 https://ejs.bootcss.com/#install
 * 文档 https://aui.github.io/art-template/zh-cn/docs/api.html
 */
const ejs = require('ejs');
const artTemplate = require('art-template');

module.exports = {
    render(template,value){
        return ejs.render(template,value);
    },
    render_1(template,value){
        const render = artTemplate.compile(template);
        const html = render(value);
        return html;
    },
}