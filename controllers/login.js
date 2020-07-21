const User = require("./../models/user.js");

const loginController = {
  login: async function(req,res,next){
    let phone = req.body.phone;
    let password = req.body.password;
    if(!phone || !password){
      res.json({code:0,data:" 参数为空"});
      return
    }
    try{
      const users = await User.select({phone,password});
      const user = users[0];
      if(user){
        let login_Code = phone+'\t'+password+'\t'+user.id+'\t';
        res.json({code:200,data:{token:login_Code}, message:"登录成功"})
      }else{
        res.json({code:0,message:'登录失败，查询不到此用户'});
      }
    }catch{
      res.json({code:0,message:'系统问题，联系管理员处理'})
    }
  }
}

module.exports = loginController;