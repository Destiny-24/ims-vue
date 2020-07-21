// 引用 基础模型及用户方法
const Base = require('./base.js');
// 定义用户模型
class Classify extends Base {
  // 定义参数默认值为 Classify 表
  constructor(props = "classify"){
    super(props)
  }
}


module.exports = new Classify()