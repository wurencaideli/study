/**
 * 数据写入读取
 * 一个以唯一标识区分的文件系统
 * 只存储字符串
 */
const fs = require('fs');
const path = require('path');
const fileName = 'post-data';  //主文件夹名称
const fileSize = 7000;  //一个文件夹下存多少文件

/** 
 * 根据id获取文件范围
 * id sign_rangeNumber
 */
function getRangeById(id){
    id = String(id);
    return Number(id.split('_')[1]) || 0;
}
/** 获取范围文件夹名称 */
function getFileByRange(range){
    return 'f-'+(Math.ceil(range/fileSize) || 0);
}
/** 读取数据 */
function get(id){
    return new Promise((r,j)=>{
        // 根据id获取文件区间
        const range = getRangeById(id);
        const name = getFileByRange(range);
        const path_ = path.join(__dirname,fileName,name);
        if(!fs.existsSync(path_)){
            r('');
            return;
        };
        const path__ = path.join(path_,id+'.txt');
        fs.readFile(path__,'utf8',(e,v)=>{
            if(e){
                j(e);
                return;
            };
            r(v);
        });
    });
}
/** 写入数据 */
function set(id,str){
    str = String(str);
    return new Promise((r,j)=>{
        const range = getRangeById(id);
        const name = getFileByRange(range);
        const path_ = path.join(__dirname,fileName,name);
        if(!fs.existsSync(path_)){  //没有文件加则创建
            fs.mkdirSync(path_);
        };
        const path__ = path.join(path_,id+'.txt');
        fs.writeFile(path__,str,(e)=>{
            if(e){
                j(e);
                return;
            }
            r(id);
        });
    });
}
/** 删除文件 */
function clear(id){
    return new Promise((r,j)=>{
        const range = getRangeById(id);
        const name = getFileByRange(range);
        const path_ = path.join(__dirname,fileName,name);
        if(!fs.existsSync(path_)){
            r(id);
            return;
        };
        const path__ = path.join(path_,id+'.txt');
        fs.unlink(path__,(e)=>{
            if(e){
                j(e);
                return;
            }
            r(id);
        });
    });
}
//最开始就初始化
/**初始化 */
function initData(){
    const path_ = path.join(__dirname,fileName);
    //创建一个主文件夹
    if(fs.existsSync(path_)) return;
    fs.mkdirSync(path_);
}
initData();

module.exports = {
    get,
    set,
    clear,
};