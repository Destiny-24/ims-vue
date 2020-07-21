const Classify = require('./../models/classify.js');
const article = require('../models/article.js');

const classifyController = {
  insert: async function(req,res,netx){
    let name = req.body.name;
    if(!name){
      res.json({
        code:0,
        message:'缺少必要参数'
      })
    }try{
      const classify = await Classify.insert({name});
      let id = classify[0];
      res.json({
        code:200,
        data:{ id }
      })
    }catch(e){
      console.log(e)
      res.json({
        code:0,
        message:'内部错误'
      })
    }
  },
  list:async function(req,res,next){
    try{
      const classify = await Classify.all();
      res.json({
        code:200,
        data:classify
      })
    }
    catch(e){
      console.log(e)
      res.json({
        code:0,
        message:'内部错误'
      })
    }
  },
  classifyArticle:async function(req,res,next){
  try{
    let id = req.params.id;
    const Aritcle_id = await article.select({classify_id:id});
    res.json({
      code:200,
      data:Aritcle_id
    })
  }catch(err){
    res.json({
      code:0,
      message:err
    })
    }
  },
  updata:async function(req,res,next){
    let name = req.body.name;
    let id = req.params.id;
    if(!name){
      res.json({
        code:0,
        message:'缺少必要参数'
      })
    }try{
      await Classify.update(id,{name});
      res.json({
        code:200,
        message:'修改成功'
      })
    }catch(e){
      console.log(e);
      res.json({
        code:0,
        message:'内部错误'
      })
    }
  },
  delete:async function(req,res,next){
    let id = req.params.id;
    try{
      await Classify.delete(id);
      res.json({
        code:200,
        message:'删除成功'
      })
    }catch(e){
      console.log(e);
      res.json({
        code:0,
        message:'内部错误'
      })
    }
  }
}

module.exports = classifyController;
