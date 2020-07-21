const Article = require('./../models/article.js');
const {formatTime, formatDate} = require('./../utils/date.js');

const articleController = {
  insert: async function(req,res,next){
    let title = req.body.title;
    let classify_id = req.body.classify_id;
    let content = req.body.content;
    let created_time = new Date();

    if(!title || !classify_id || !content ){
      res.json({code:0,message:'缺少必要参数'})
      return
    }try{
      await Article.insert({title,classify_id,content,created_time});
      res.json({
        code:200,
        message:"新增成功！"
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
      const classify_id = req.query.id
      const PageSize = req.query.PageSize || 10;
      const CurrentPage = req.query.CurrentPage || 1;
      let index = (CurrentPage - 1) * PageSize
      let articles = null
      if(classify_id) articles = await Article.all().where({classify_id}).offset(index).limit(PageSize);
      else articles = await Article.all().offset(index).limit(PageSize);
      let tatel = null
      if(classify_id) tatel = await Article.all().where({classify_id}).count('id as index')
      else tatel = await Article.all().count('id as index')
      articles.forEach(data =>{
        data.created_time = formatTime(data.created_time)
      })
      res.json({
        code:200,
        data:articles,tatel
      })
    }catch(e){
      console.log(e)
      res.json({
        code:0,
        message:'内部错误'
      })
    }
  },
  show:async function(req,res,next){
    try{
      const id = req.params.id;
      const articles = await Article.select({id});
      articles.forEach(data =>{
        data.created_time = formatDate(data.created_time)
      })
      const article = articles[0];
      res.json({
        code:200,
        data:article
      })
    }catch(e){
      console.log(e)
      res.json({
        code:0,
        message:'内部错误'
      })
    }
  },
  update:async function(req,res,next){
    let title = req.body.title;
    let classify_id = req.body.classify_id;
    let content = req.body.content;
    let id = req.params.id;

    if(!title || !classify_id || !content ){
      res,json({code:0 ,message:'缺少必要参数'});
      return
    }
    try{
      const article = await Article.update(id,{ title, classify_id, content});
      res.json({
        code:200,
        data:article
      })
    }catch(e){
      console.log(e)
      res.json({
        code:0,
        message:'内部错误'
      })
    }
  },
  delete:async function(req,res,next){
    let id = req.params.id;
    try{
      await Article.delete(id);
      res.json({
        code:200,
        message:'删除成功'
      })
    }catch(e){
      console.log(e)
      res.json({
        code:0,
        message:'内部错误'
      })
    }
  },
  inquire:async function(req,res,next){

  }
}

module.exports = articleController;