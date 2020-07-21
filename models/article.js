// 引用 基础模型及用户方法
const Base = require('./base.js');
// 定义用户模型
class Article extends Base {
  // 定义参数默认值为 article 表
  constructor(props = "article"){
    super(props)
  }
}


module.exports = new Article()