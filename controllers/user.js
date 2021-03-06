const User = require("./../models/user.js");
const {formatTime} = require('./../utils/date.js')
const userController = {
  insert: async function(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    let created_time = new Date();
    if(!name|| !phone || !password ){
      res.json({code:0 ,message:"缺少必要参数"});
      return
    }
    try{
      const user = await User.insert({
        name,phone,password,created_time
      });
      res.json({
        code:200,
        message:"新增成功"
      })
    }catch(e){
      res.json({
        code:0,
        message:e
      })
    }
  },
  list: async function(req,res,next){
    try{
      const users = await User.all();
      const usersDisplay = users.map((data)=>{
        data.created_time_display = formatTime(data.created_time);
        return data
      });
      res.json({
        code:200,
        data: usersDisplay
      })
    }catch(e){
      console.log(e)
      res.json({ 
        code: 0,
        message: '内部错误'
      })
    }
  },
  update: async function(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    let id = req.params.id;
    if(!name || !phone || !password){
      res.json({code:0,message:"缺少必要参数"});
      return
    }
    try{
       await User.update(id,{
        name,phone,password
      });
      res.json({
        code:200,
        message:"cg"
      })
    }catch(e){
      res.json({
        code:0,
        message:e
      })
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    try{
      await User.delete(id);
      res.json({
        code:200,
        message:'删除成功'
      })
    }catch{
      res.json({
        code:0,
        message:'内部错误'
      })
    }
  }
}
module.exports = userController;