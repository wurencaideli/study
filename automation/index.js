/**
 * 自动化工具
 * 使用模板文件，数据来创建文件
 */
const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');
const render = require('./common/render').render;
const render_1 = require('./common/render').render_1;

/** 遍历excel */
function getExcelData(){
    return new Promise((r,j)=>{
        const filesName = 'excel';
        const path_ = path.join(__dirname,filesName);
        if(!fs.existsSync(path_)){
            fs.mkdirSync(path_);
        };
        fs.readdir(path_,(e,v)=>{
            if(e){
                j(e);
                return;
            };
            r(v.reduce((c,item)=>{
                const path__ = path.join(path_,item);
                const data = xlsx.parse(path__);
                c[item] = data;
                return c;
            },{}));
        });
    }); 
}
/** 
 * 读取文件，开始自动化生成
 */
function startCreate(){
    getExcelData().then(res=>{
        console.log(JSON.stringify(res));
    });
    const filesName = 'template';
    const path_ = path.join(__dirname,filesName);
    if(!fs.existsSync(path_)){
        fs.mkdirSync(path_);
    };
    const filesName_1 = 'dist';
    const path_2 = path.join(__dirname,filesName_1);
    if(!fs.existsSync(path_2)){
        fs.mkdirSync(path_2);
    };
    const templateName = 'template.vue';
    fs.readFile(path.join(path_,templateName),'utf8',function(error,datastr){
        if(error){
            console.log(`读取失败：${error}`);
            return;
        }
        const data = require('./data/data.js').data;
        // const template = require('./template.js').template;
        const str = render(datastr, {
            // data:JSON.stringify(data),
            data:data,
        });
        const distFileName = 'template.vue';
        /** 保存文件 */
        fs.writeFile(path.join(path_2,distFileName), str, (error) => {
            if(error){
                console.log(`创建失败：${error}`);
                return;
            }
            // 创建成功
            console.log(`创建成功！`);
        });
    });
}
startCreate();

module.exports = {
    getExcelData,
};